set -e
npm ci
tsc
zip -j ../dist/align.zip dist/* package.json