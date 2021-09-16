provider "google" {
  project = "lexoral-test"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}

data "google_project" "project" {}

resource "google_storage_bucket" "remote_state" {
  name = "${data.google_project.project.project_id}-tf-state"
  storage_class = "REGIONAL"
  location = "europe-west2"
}
