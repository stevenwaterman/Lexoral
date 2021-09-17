set -e
npm ci
tsc
zip -j ../dist/transcribe.zip dist/index.js package.json