set -e
npm ci
tsc
zip -j ../dist/adjust.zip dist/* package.json