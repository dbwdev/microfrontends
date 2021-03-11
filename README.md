# microfrontends

This is a POC to demonstrate microfrontends. Within this frontend app are three separate apps written in three separate JavaScript frameworks, React, Vue, and Svelte.

## Installation
`npm install` and `npm start` to start the app. It will open up a page on `localhost:8080` with a page that shows three where the three separate JS frameworks are imported and placed.

## How it works
This app uses `single-spa` (https://single-spa.js.org/) as the microfrontend framework. How it stitches together multiple frontend JS bundles is through SystemJS dynamic imports. This allows for "loose coupling" on the frontend.

More details on how `single-spa` works can be found in `single-spa.config.js`.

Source code for each JS framework is under `src/[JSFramework]`.
