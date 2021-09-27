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

variable "watch" {
  description = "The bucket to watch."
  type        = string
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
