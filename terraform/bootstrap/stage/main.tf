provider "google" {
  project = "lexoral-stage"
  region  = "europe-west2"
  zone    = "europe-west2-b"
}

module "bootstrap" {
  source = "../../modules/bootstrap"
}
