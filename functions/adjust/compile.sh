set -e
exit 1
pipenv lock -r > requirements.txt
zip ../dist/adjust.zip main.py requirements.txt