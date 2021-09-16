# Install, compile, zip all functions in parallel

rm -r dist
mkdir -p dist

compile() {
  local dir=$1
  cd ${dir}
  bash compile.sh
  echo "done ${dir}"
  cd ..
}

for dir in adjust align fetch transcribe; do compile "$dir" & done
wait
echo "done all"
