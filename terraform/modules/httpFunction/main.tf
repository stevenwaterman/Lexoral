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

  available_memory_mb   = var.memory
  timeout               = var.timeout
  source_archive_bucket = var.bucket
  source_archive_object = google_storage_bucket_object.function_src.name
  trigger_http          = true
  entry_point           = "run"
  environment_variables = {
    PROJECT_ID = var.project_id
  }
}

resource "google_cloudfunctions_function_iam_member" "invoker" {
  count  = var.public ? 1 : 0
  cloud_function = google_cloudfunctions_function.function.name
  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}
