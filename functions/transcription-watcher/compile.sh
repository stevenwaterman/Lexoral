set -e
npm ci
tsc
zip -j ../dist/transcription-watcher.zip dist/* package.json