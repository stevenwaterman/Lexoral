provider "google" {
  project = "lexoral-prod"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}
provider "archive" {}

terraform {
  backend "gcs" {
    bucket  = "lexoral-prod-tf-state"
    prefix  = "terraform/state"
  }
}

module "lexoral" {
  source = "./modules/lexoral"
}
