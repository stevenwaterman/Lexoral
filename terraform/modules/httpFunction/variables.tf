variable "name" {
  description = "The function name."
  type        = string
}

variable "bucket" {
  description = "The name of the bucket that code is uploaded to."
  type        = string
}

variable "memory" {
  description = "The memory for the function, in mb."
  type        = number
  default     = 128
}

variable "project_id" {
  description = "The GCP project ID."
  type        = string
}

variable "timeout" {
  description = "The duration in seconds before the function returns error"
  type        = number
  default     = 60
}

variable "public" {
  description = "Whether the function is externally callable"
  type        = bool
  default     = false
}

variable "sa_email" {
  description = "The default google app engine service account email"
  type        = string
}