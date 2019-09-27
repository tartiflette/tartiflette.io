#!/bin/bash

# Here is a pure Bash version that doesn't require any external utilities:
# https://stackoverflow.com/a/4025065
vercomp () {
    if [[ $1 == $2 ]]
    then
        return 0
    fi
    local IFS=.
    local i ver1=($1) ver2=($2)
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++))
    do
        ver1[i]=0
    done
    for ((i=0; i<${#ver1[@]}; i++))
    do
        if [[ -z ${ver2[i]} ]]
        then
            ver2[i]=0
        fi
        if ((10#${ver1[i]} > 10#${ver2[i]}))
        then
            return 1
        fi
        if ((10#${ver1[i]} < 10#${ver2[i]}))
        then
            return 2
        fi
    done
    return 0
}

# We build the documentation only for the version upper than 0.12.4
MIN_VERSION="0.12.4"

# We init the version list
echo "[]" > website/versions.json

# We make sure that there is no remainders
rm -rf ./tmp_tartiflette
rm -rf ./website/versioned_docs
rm -rf ./docs

git clone https://github.com/tartiflette/tartiflette.git tmp_tartiflette

cd ./tmp_tartiflette

# List all the versions/tags of the repository
versions=$(git tag -l --sort=v:refname | egrep -o '^[0-9]+\.[0-9]+\.[0-9]+$')

echo $versions

# exit 0

for version in $versions
do
    vercomp $MIN_VERSION $version
    resultcomp=$?
    if [ "$resultcomp" -ne "2" ]
    then
        echo "$version is too old." 
        continue
    fi

    echo "Checkout and build the documentation for: $version"
    git checkout -f $version
    cd ../
    rm -rf docs && mkdir -p docs
    cp -R ./tmp_tartiflette/docs/* ./docs/
    cd website/
    npm run version $version
    cd ../tmp_tartiflette
done

git checkout -f master
cd ../
cp -R ./website/versioned_sidebars_persisted/* ./website/versioned_sidebars
rm -rf docs && mkdir -p docs
cp -R ./tmp_tartiflette/docs/* ./docs/
rm -rf ./tmp_tartiflette
