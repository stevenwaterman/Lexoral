set -e
npm ci
tsc
zip -j ../dist/patch.zip dist/* package.json