set -e
npm ci
tsc
zip -j ../dist/transcode-transcription.zip dist/* package.json