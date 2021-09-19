set -e
npm ci
tsc
zip -j ../dist/transcode.zip dist/* package.json