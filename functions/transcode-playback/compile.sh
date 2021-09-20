set -e
npm ci
tsc
zip -j ../dist/transcode-playback.zip dist/* package.json