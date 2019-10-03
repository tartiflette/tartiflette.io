#!/bin/bash

echo "Checkout version '$0'"

rm -rf ./tmp_tartiflette ./docs
git clone https://github.com/tartiflette/tartiflette.git tmp_tartiflette
cd ./tmp_tartiflette
git checkout $1
cd ../
mv ./tmp_tartiflette/docs docs
rm -rf tmp_tartiflette

echo "We are building the docker image of the tartiflette.io builder"

docker build -t tartiflette-builder .

echo "Create new version through docusaurus cli"
PWD=$(pwd)
docker run -it \
    -v $PWD/website/versioned_docs:/app/website/versioned_docs \
    -v $PWD/website/versioned_sidebars:/app/website/versioned_sidebars \
    -v $PWD/website/versions.json:/app/website/versions.json \
    tartiflette-builder npm run version $1
