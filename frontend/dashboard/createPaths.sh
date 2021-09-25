echo "Initiating jank"
for path in auth/login auth/signup auth/verify; do
  mkdir -p public/$path
  cp public/index.html public/$path/index.html
  echo $path
done
echo "Jank complete"
