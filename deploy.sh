#!/usr/bin/env bash

if [ -z $1 ]; then
    echo "You must pass the version number. e.g ./deploy 1.2.06"
    exit 1
fi

function checkFailed {
    if [ $? -ne 0 ]; then
        echo "Error aborting deployment"
        exit 1
    fi
}

echo "Building site..."
jekyll build
checkFailed

echo "tagging new version..."
git tag $1
git push origin --tag
checkFailed

echo "uploading to prod..."
aws s3 sync ./_site s3://portfolio.johnarmstrong.co
checkFailed

echo "Successfully deploy version $1"