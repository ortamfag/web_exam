#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .nuxt/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ortamfag/web_exam.git master:gh-pages

cd -