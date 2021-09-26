export PROJECT_ID="lexoral-stage"
export FIREBASE_API_KEY="AIzaSyBxFFOSL7yfPksJMK1drBBabOWlOWLwDE4"
( cd dashboard; npm i; npm run dev ) &
( cd editor; npm i; npm run dev ) &
serve -n -l 5000 public