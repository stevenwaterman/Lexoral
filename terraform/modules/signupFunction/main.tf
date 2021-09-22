data "archive_file" "archive" {
  type        = "zip"
  source_dir = "${path.module}/../../functions/${var.name}"
  output_path = "${path.module}/../../zips/${var.name}.zip"
}

resource "google_storage_bucket_object" "function_src" {
  name   = "${var.name}-${data.archive_file.archive.output_md5}.zip"
  bucket = var.bucket
  source = "${path.module}/../../zips/${var.name}.zip"
}

resource "google_cloudfunctions_function" "function" {
  name        = var.name
  runtime     = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = var.bucket
  source_archive_object = google_storage_bucket_object.function_src.name
  trigger_http          = false
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = var.project_id
  }

  event_trigger {
    event_type = "providers/firebase.auth/eventTypes/user.create"
    resource = "projects/${var.project_id}"
  }
}
