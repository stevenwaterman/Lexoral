# Terraform IAM

The credentials for terraform should have the following permissions:

* Editor
* App engine creator
* Cloud functions admin

# APIs

Lexoral makes use of a number of APIs that need to be manually enabled before you can do `terraform apply` on a new project:

* Cloud Function
* Cloud Build
* Cloud Speech-to-Text
* Identity Platform
* Firestore (native mode, europe-west-2)
* IAM Service Account Credentials API

# In-console setup

* Add an Email/Password provider to Identity Platform
* Add lexoral.com as an authorized domain and remove the others in identity platform
* Add `Service Account Token Creator` to the default app engine service account
* Add the rules from firestore.rules in https://console.firebase.google.com/project/{PROJECT_ID}/firestore/rules