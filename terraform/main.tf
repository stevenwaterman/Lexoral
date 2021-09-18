provider "google" {
  project = "lexoral-test"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}

terraform {
  backend "gcs" {
    bucket  = "lexoral-test-tf-state"
    prefix  = "terraform/state"
  }
}

data "google_project" "project" {}

resource "google_storage_bucket" "audio" {
  name = "${data.google_project.project.project_id}-raw-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "playback_audio" {
  name = "${data.google_project.project.project_id}-playback-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "transcription_audio" {
  name = "${data.google_project.project.project_id}-transcription-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "raw_transcripts" {
  name = "${data.google_project.project.project_id}-transcripts-raw"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "transcripts" {
  name = "${data.google_project.project.project_id}-transcripts"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
}



resource "google_storage_bucket" "functions_code" {
  name = "${data.google_project.project.project_id}-functions-code"
  storage_class = "REGIONAL"
  location = "europe-west2"
}


resource "google_storage_bucket_object" "transcribe_function_src" {
  name   = "transcribe-${substr(filemd5("./functions/transcribe.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/transcribe.zip"
}

resource "google_cloudfunctions_function" "transcribe" {
  name        = "transcribe"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.transcribe_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.storage.object.finalize"
    resource = google_storage_bucket.transcription_audio.name
  }
}



resource "google_storage_bucket_object" "align_function_src" {
  name   = "align-${substr(filemd5("./functions/align.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/align.zip"
}

resource "google_cloudfunctions_function" "align" {
  name        = "align"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.align_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.storage.object.finalize"
    resource = google_storage_bucket.raw_transcripts.name
  }
}



resource "google_storage_bucket_object" "signup_function_src" {
  name   = "signup-${substr(filemd5("./functions/signup.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/signup.zip"
}

resource "google_cloudfunctions_function" "signup" {
  name        = "signup"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.signup_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "providers/firebase.auth/eventTypes/user.create"
    resource = "projects/${data.google_project.project.project_id}"
  }
}



resource "google_pubsub_topic" "to_adjust" {
  name = "to-adjust"
}

resource "google_storage_bucket_object" "adjust_function_src" {
  name   = "adjust-${substr(filemd5("./functions/adjust.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/adjust.zip"
}

resource "google_cloudfunctions_function" "adjust" {
  name        = "adjust"
  runtime     = "python38"

  available_memory_mb   = 8192
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.adjust_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.to_adjust.name
  }
}



resource "google_storage_bucket_object" "fetch_function_src" {
  name   = "fetch-${substr(filemd5("./functions/fetch.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/fetch.zip"
}

resource "google_cloudfunctions_function" "fetch" {
  name        = "fetch"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.fetch_function_src.name
  trigger_http          = true
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }
}

resource "google_cloudfunctions_function_iam_member" "fetch_invoker" {
  cloud_function = google_cloudfunctions_function.fetch.name
  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}



resource "google_storage_bucket_object" "upload_function_src" {
  name   = "upload-${substr(filemd5("./functions/upload.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/upload.zip"
}

resource "google_cloudfunctions_function" "upload" {
  name        = "upload"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.upload_function_src.name
  trigger_http          = true
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }
}

resource "google_cloudfunctions_function_iam_member" "upload_invoker" {
  cloud_function = google_cloudfunctions_function.upload.name
  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}
