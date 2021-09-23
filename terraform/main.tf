provider "google" {
  project = "lexoral-test"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}
provider "archive" {}

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




module "signup" {
  source = "./modules/signupFunction"
  name = "signup"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "upload" {
  source = "./modules/httpFunction"
  name = "upload"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "upload_watcher" {
  source = "./modules/storageFunction"
  name = "upload_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.audio.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "post_upload" {
  name = "post-upload"
}

module "transcode_playback" {
  source = "./modules/pubsubFunction"
  name = "transcode_playback"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.post_upload.name
  project_id = data.google_project.project.project_id
  memory = 1024
}

resource "google_pubsub_topic" "transcoded_playback" {
  name = "transcoded-playback"
}

module "charge_credit" {
  source = "./modules/pubsubFunction"
  name = "charge_credit"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcoded_playback.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "paid" {
  name = "paid"
}

resource "google_pubsub_topic" "not_paid" {
  name = "not-paid"
}

module "transcode_transcription" {
  source = "./modules/pubsubFunction"
  name = "transcode_transcription"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.paid.name
  project_id = data.google_project.project.project_id
  memory = 1024
}

resource "google_pubsub_topic" "transcoded_transcription" {
  name = "transcoded-transcription"
}

module "transcode_envelope" {
  source = "./modules/pubsubFunction"
  name = "transcode_envelope"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcoded_transcription.name
  project_id = data.google_project.project.project_id
  memory = 1024
}

resource "google_pubsub_topic" "transcoded_envelope" {
  name = "transcoded-envelope"
}

module "transcribe" {
  source = "./modules/pubsubFunction"
  name = "transcribe"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcoded_envelope.name
  project_id = data.google_project.project.project_id
}

module "transcription_watcher" {
  source = "./modules/storageFunction"
  name = "transcription_watcher"
  bucket = google_storage_bucket.functions_code.name
  watch = google_storage_bucket.raw_transcripts.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "transcribed" {
  name = "transcribed"
}

module "align" {
  source = "./modules/pubsubFunction"
  name = "align"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.transcribed.name
  project_id = data.google_project.project.project_id
}

resource "google_pubsub_topic" "aligned" {
  name = "aligned"
}

module "adjust" {
  source = "./modules/pubsubFunction"
  name = "adjust"
  bucket = google_storage_bucket.functions_code.name
  topic = google_pubsub_topic.aligned.name
  project_id = data.google_project.project.project_id
}

module "fetch" {
  source = "./modules/httpFunction"
  name = "fetch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}

module "patch" {
  source = "./modules/httpFunction"
  name = "patch"
  bucket = google_storage_bucket.functions_code.name
  project_id = data.google_project.project.project_id
}
