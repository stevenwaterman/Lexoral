set -e
npm ci
tsc
zip -j ../dist/upload-watcher.zip dist/* package.json