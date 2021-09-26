# Bootstrap

Run `terraform init` and `terraform apply` on the two bootstrap projects to create the remote state buckets

# APIs

Lexoral makes use of a number of APIs that need to be manually enabled before you can do `terraform apply` on a new project:

- https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com
- https://console.cloud.google.com/apis/library/cloudbuild.googleapis.com
- https://console.cloud.google.com/apis/library/appengine.googleapis.com
- https://console.cloud.google.com/marketplace/product/google-cloud-platform/customer-identity
- https://console.cloud.google.com/apis/library/firestore.googleapis.com
- https://console.cloud.google.com/marketplace/product/google/speech.googleapis.com
- https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com

# In-console setup

* Add an Email/Password provider to Identity Platform
* Add lexoral.com as an authorized domain and remove the others in identity platform
* Add the rules from firestore.rules in https://console.firebase.google.com/project/{PROJECT_ID}/firestore/rules
