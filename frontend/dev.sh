cd landing
npm i
npm run build
cd ..
rsync -a static/ public/

( cd dashboard; npm i; npm run dev ) &
( cd editor; npm i; npm run dev ) &
( cd editor; npm i; npm run dev-demo ) &

serve -n -l 5000 public
