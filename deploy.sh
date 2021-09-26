#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy#1'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
# deploying to https://binhbdn.github.io/flower-shop
git push -f git@github.com:binhbdn/flower-shop.git main:gh-pages

cd -

# how to run this file to deploy:
# chmod +x ./deploy.sh
# ./deploy.sh