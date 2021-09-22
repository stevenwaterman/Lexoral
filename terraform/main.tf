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
  cors {
    origin          = ["http://localhost", "http://localhost:5000", "https://lexoral.com"]
    method          = ["PUT"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "playback_audio" {
  name = "${data.google_project.project.project_id}-playback-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  cors {
    origin          = ["http://localhost", "http://localhost:5000", "https://lexoral.com"]
    method          = ["GET"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "transcription_audio" {
  name = "${data.google_project.project.project_id}-transcription-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "envelope_audio" {
  name = "${data.google_project.project.project_id}-envelope-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "raw_transcripts" {
  name = "${data.google_project.project.project_id}-transcripts-raw"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "transcripts" {
  name = "${data.google_project.project.project_id}-transcripts"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  force_destroy = true # TODO remove this
}



resource "google_storage_bucket" "functions_code" {
  name = "${data.google_project.project.project_id}-functions-code"
  storage_class = "REGIONAL"
  location = "europe-west2"
  force_destroy = true # TODO remove this
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



resource "google_pubsub_topic" "post_upload" {
  name = "post-upload"
}

resource "google_storage_bucket_object" "upload_watcher_function_src" {
  name   = "upload-watcher-${substr(filemd5("./functions/upload-watcher.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/upload-watcher.zip"
}

resource "google_cloudfunctions_function" "upload_watcher" {
  name        = "upload_watcher"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.upload_watcher_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.storage.object.finalize"
    resource = google_storage_bucket.audio.name
  }
}



resource "google_pubsub_topic" "transcoded_playback" {
  name = "transcoded-playback"
}

resource "google_storage_bucket_object" "transcode_playback_function_src" {
  name   = "transcode-playback-${substr(filemd5("./functions/transcode-playback.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/transcode-playback.zip"
}

resource "google_cloudfunctions_function" "transcode_playback" {
  name        = "transcode_playback"
  runtime     = "nodejs14"

  available_memory_mb   = 1024
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.transcode_playback_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.post_upload.name
  }
}



resource "google_pubsub_topic" "paid" {
  name = "paid"
}

resource "google_pubsub_topic" "not_paid" {
  name = "not-paid"
}

resource "google_storage_bucket_object" "charge_credit_function_src" {
  name   = "charge-credit-${substr(filemd5("./functions/charge-credit.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/charge-credit.zip"
}

resource "google_cloudfunctions_function" "charge_credit" {
  name        = "charge_credit"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.charge_credit_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.transcoded_playback.name
  }
}



resource "google_pubsub_topic" "transcoded_transcription" {
  name = "transcoded-transcription"
}

resource "google_storage_bucket_object" "transcode_transcription_function_src" {
  name   = "transcode-transcription-${substr(filemd5("./functions/transcode-transcription.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/transcode-transcription.zip"
}

resource "google_cloudfunctions_function" "transcode_transcription" {
  name        = "transcode_transcription"
  runtime     = "nodejs14"

  available_memory_mb   = 1024
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.transcode_transcription_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.paid.name
  }
}



resource "google_pubsub_topic" "transcoded_envelope" {
  name = "transcoded-envelope"
}

resource "google_storage_bucket_object" "transcode_envelope_function_src" {
  name   = "transcode-envelope-${substr(filemd5("./functions/transcode-envelope.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/transcode-envelope.zip"
}

resource "google_cloudfunctions_function" "transcode_envelope" {
  name        = "transcode_envelope"
  runtime     = "nodejs14"

  available_memory_mb   = 1024
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.transcode_envelope_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.transcoded_transcription.name
  }
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
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.transcoded_envelope.name
  }
}



resource "google_pubsub_topic" "transcribed" {
  name = "transcribed"
}

resource "google_storage_bucket_object" "transcription_watcher_function_src" {
  name   = "transcription-watcher-${substr(filemd5("./functions/transcription-watcher.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/transcription-watcher.zip"
}

resource "google_cloudfunctions_function" "transcription_watcher" {
  name        = "transcription_watcher"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.transcription_watcher_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.storage.object.finalize"
    resource = google_storage_bucket.raw_transcripts.name
  }
}



resource "google_pubsub_topic" "aligned" {
  name = "aligned"
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
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.transcribed.name
  }
}



resource "google_storage_bucket_object" "adjust_function_src" {
  name   = "adjust-${substr(filemd5("./functions/adjust.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/adjust.zip"
}

resource "google_cloudfunctions_function" "adjust" {
  name        = "adjust"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.adjust_function_src.name
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = google_pubsub_topic.aligned.name
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



resource "google_storage_bucket_object" "patch_function_src" {
  name   = "patch-${substr(filemd5("./functions/patch.zip"), 0, 10)}.zip"
  bucket = google_storage_bucket.functions_code.name
  source = "./functions/patch.zip"
}

resource "google_cloudfunctions_function" "patch" {
  name        = "patch"
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_code.name
  source_archive_object = google_storage_bucket_object.patch_function_src.name
  trigger_http          = true
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = data.google_project.project.project_id
  }
}

resource "google_cloudfunctions_function_iam_member" "patch_invoker" {
  cloud_function = google_cloudfunctions_function.patch.name
  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}
