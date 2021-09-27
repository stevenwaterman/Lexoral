export branch="stage"
( cd dashboard; npm i; npm run dev ) &
( cd editor; npm i; npm run dev ) &
serve -n -l 5000 public