set -e
npm ci
tsc
zip -j ../dist/signup.zip dist/index.js package.json