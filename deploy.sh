
set -e
npm install
npm run build

aws s3 sync dist/ s3://boss.dev-ot.org --delete

echo "Deployed to http://boss.dev-ot.org/"
