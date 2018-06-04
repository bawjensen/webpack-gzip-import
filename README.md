# Minimal repo to demonstrate issue with webpack, gzipped assets and import()

## Getting started

`yarn start` will start the server, and going to `localhost:8080/index.html` will demonstrate the
setup as it stands.

## The context

We're trying to load gzipped assets output from the build. We have index.html pointing at the
built `main.js.gz` file as appropriate, so it's loading the gzipped asset. However, the dynamically
imported `async.js` is loaded as the non-gzipped asset.
