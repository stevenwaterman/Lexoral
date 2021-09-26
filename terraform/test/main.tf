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

module "lexoral" {
  source = "./modules/lexoral"
}
