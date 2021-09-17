# Install, compile, zip all functions in parallel

rm -r dist
mkdir -p dist

compile() {
  local dir=$1
  cd ${dir}
  bash compile.sh || touch "../dist/error-${dir}"
  echo "done ${dir}"
  cd ..
}

for dir in adjust align fetch transcribe signup; do compile "$dir" & done
wait

for f in ./dist/error-*; do
    ## Check if the glob gets expanded to existing files.
    ## If not, f here will be exactly the pattern above
    ## and the exists test will evaluate to false.
    [ -e "$f" ] && {
      echo "Error compiling"
      exit 1
    } || {
      echo "All success"
      exit 0
    }
    ## This is all we needed to know, so we can break after the first iteration
    break
done
