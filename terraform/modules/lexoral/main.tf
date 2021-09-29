data "google_project" "project" {}

resource "google_app_engine_application" "app" {
  project     = data.google_project.project.project_id
  location_id = "europe-west2"
  database_type = "CLOUD_FIRESTORE"
}

data "google_app_engine_default_service_account" "default" {
}

resource "google_project_iam_member" "app-engine-sa-signblobs" {
  role    = "roles/appengineflex.serviceAgent"
  member  = "serviceAccount:${data.google_app_engine_default_service_account.default.email}"
}

resource "google_storage_bucket" "audio" {
  name = "${data.google_project.project.project_id}-raw-audio"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  cors {
    origin          = ["http://localhost", "http://localhost:5000", "https://lexoral.com"]
    method          = ["GET", "PUT"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "envelope_audio" {
  name = "${data.google_project.project.project_id}-envelope-audio"
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

resource "google_storage_bucket" "raw_transcripts" {
  name = "${data.google_project.project.project_id}-transcripts-raw"
  storage_class = "REGIONAL"
  location = "europe-west2"
  uniform_bucket_level_access = true
  force_destroy = true # TODO remove this
}

resource "google_storage_bucket" "aligned_transcripts" {
  name = "${data.google_project.project.project_id}-transcripts-aligned"
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




module "signup" {
  source = "../signupFunction"
  name = "signup"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "upload" {
  source = "../httpFunction"
  name = "upload"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  public = true
}

module "upload_watcher" {
  source = "../storageFunction"
  name = "upload_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.audio.name
  project_id = data.google_project.project.project_id
}

module "transcode_envelope" {
  source = "../httpFunction"
  name = "transcode_envelope"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  memory = 1024
  timeout = 540
}

module "charge_credit" {
  source = "../httpFunction"
  name = "charge_credit"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "transcribe" {
  source = "../httpFunction"
  name = "transcribe"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "transcription_watcher" {
  source = "../storageFunction"
  name = "transcription_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.raw_transcripts.name
  project_id = data.google_project.project.project_id
}

module "align" {
  source = "../httpFunction"
  name = "align"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  memory = 8192
}

module "adjust" {
  source = "../httpFunction"
  name = "adjust"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  memory = 8192
}

module "fetch" {
  source = "../httpFunction"
  name = "fetch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  public = true
}

module "patch" {
  source = "../httpFunction"
  name = "patch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
  public = true
}



resource "google_workflows_workflow" "pre_transcribe_workflow" {
  name            = "pre_transcribe"
  region          = "europe-west4"
  service_account = data.google_app_engine_default_service_account.default.unique_id
  source_contents = file("${path.root}/../functions/workflows/pre_transcribe.yml")
}

resource "google_workflows_workflow" "post_transcribe_workflow" {
  name            = "post_transcribe"
  region          = "europe-west4"
  service_account = data.google_app_engine_default_service_account.default.unique_id
  source_contents = file("${path.root}/../function/workflows/post_transcribe.yml")
}
