set -e
npm ci
tsc
zip -j ../dist/charge-credit.zip dist/* package.json