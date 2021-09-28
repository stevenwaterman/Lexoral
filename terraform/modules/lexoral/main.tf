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
}

module "upload_watcher" {
  source = "../storageFunction"
  name = "upload_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.audio.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "post_upload" {
  name = "post-upload"
}

module "transcode_envelope" {
  source = "../pubsubFunction"
  name = "transcode_envelope"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.post_upload.name
  project_id = data.google_project.project.project_id
  memory = 1024
  timeout = 540
}

resource "google_pubsub_topic" "transcoded_envelope" {
  name = "transcoded-envelope"
}

module "charge_credit" {
  source = "../pubsubFunction"
  name = "charge_credit"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcoded_envelope.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "paid" {
  name = "paid"
}

resource "google_pubsub_topic" "not_paid" {
  name = "not-paid"
}

module "transcribe" {
  source = "../pubsubFunction"
  name = "transcribe"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.paid.name
  project_id = data.google_project.project.project_id
}

module "transcription_watcher" {
  source = "../storageFunction"
  name = "transcription_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.raw_transcripts.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "transcribed" {
  name = "transcribed"
}

module "align" {
  source = "../pubsubFunction"
  name = "align"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcribed.name
  project_id = data.google_project.project.project_id
  memory = 8192
}

resource "google_pubsub_topic" "aligned" {
  name = "aligned"
}

module "adjust" {
  source = "../pubsubFunction"
  name = "adjust"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.aligned.name
  project_id = data.google_project.project.project_id
  memory = 8192
}

module "fetch" {
  source = "../httpFunction"
  name = "fetch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "patch" {
  source = "../httpFunction"
  name = "patch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}


resource "google_workflows_workflow" "workflows_example" {
  name            = "sample-workflow"
  region          = "europe-west4"
  description     = "A sample workflow"
  service_account = data.google_app_engine_default_service_account.default.unique_id
  source_contents = <<-EOF
  # This is a sample workflow, feel free to replace it with your source code
  #
  # This workflow does the following:
  # - reads current time and date information from an external API and stores
  #   the response in CurrentDateTime variable
  # - retrieves a list of Wikipedia articles related to the day of the week
  #   from CurrentDateTime
  # - returns the list of articles as an output of the workflow
  # FYI, In terraform you need to escape the $$ or it will cause errors.

  - getCurrentTime:
      call: http.get
      args:
          url: https://us-central1-workflowsample.cloudfunctions.net/datetime
      result: CurrentDateTime
  - readWikipedia:
      call: http.get
      args:
          url: https://en.wikipedia.org/w/api.php
          query:
              action: opensearch
              search: $${CurrentDateTime.body.dayOfTheWeek}
      result: WikiResult
  - returnOutput:
      return: $${WikiResult.body[1]}
EOF
}
