set -e
npm ci
tsc
zip -j ../dist/upload.zip dist/index.js package.json