provider "google" {
  project = "lexoral-prod"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}

data "google_project" "project" {}

resource "google_storage_bucket" "remote_state" {
  name = "${data.google_project.project.project_id}-tf-state"
  storage_class = "REGIONAL"
  location = "europe-west2"
  versioning {
    enabled = true
  }
}

resource "google_service_account" "terraform_service_account" {
  account_id   = "terraform"
  display_name = "terraform"
}

resource "google_project_iam_member" "terraform_role_binding" {
  role    = "roles/editor"
  member  = "serviceAccount:${google_service_account.terraform_service_account.email}"
}
