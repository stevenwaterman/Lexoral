set -e
npm ci
tsc
zip -j ../dist/fetch.zip dist/* package.json