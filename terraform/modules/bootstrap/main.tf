data "google_project" "project" {}

resource "google_project_service" "workflows_api" {
  service            = "workflows.googleapis.com"
}

resource "google_project_service" "cloudresourcemanager_api" {
  service            = "cloudresourcemanager.googleapis.com"
}

resource "google_project_service" "cloudbuild_api" {
  service            = "cloudbuild.googleapis.com"
}

resource "google_project_service" "appengine_api" {
  service            = "appengine.googleapis.com"
}

resource "google_project_service" "firestore_api" {
  service            = "firestore.googleapis.com"
}

resource "google_project_service" "cloudfunctions_api" {
  service            = "cloudfunctions.googleapis.com"
}

resource "google_project_service" "speech_api" {
  service            = "speech.googleapis.com"
}

resource "google_project_service" "cloudidentity_api" {
  service            = "cloudidentity.googleapis.com"
}

resource "google_project_service" "iam_api" {
  service            = "iam.googleapis.com"
}

resource "google_project_service" "iamcredentials_api" {
  service            = "iamcredentials.googleapis.com"
}

resource "google_project_service" "secretmanager_api" {
  service            = "secretmanager.googleapis.com"
}

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

resource "google_project_iam_member" "terraform_role_binding_editor" {
  role    = "roles/editor"
  member  = "serviceAccount:${google_service_account.terraform_service_account.email}"
}

resource "google_project_iam_member" "terraform_role_binding_owner" {
  role    = "roles/owner"
  member  = "serviceAccount:${google_service_account.terraform_service_account.email}"
}
