#!/bin/sh
watchman watch-del-all
rm -rf node_modules
yarn
rm -rf /tmp/metro-bundler-cache-*
rm -rf /tmp/hastle-map-react-native-packager-*