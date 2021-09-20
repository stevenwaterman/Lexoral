set -e
npm ci
tsc
zip -j ../dist/transcode-envelope.zip dist/* package.json