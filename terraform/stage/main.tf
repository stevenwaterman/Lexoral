provider "google-beta" {
  project = "lexoral-stage"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}
provider "archive" {}

terraform {
  backend "gcs" {
    bucket  = "lexoral-stage-tf-state"
    prefix  = "terraform/state"
  }
}

module "lexoral" {
  source = "../modules/lexoral"
}
