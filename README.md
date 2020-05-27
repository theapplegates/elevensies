# Elevensies

A starter kit for [Eleventy](https://11ty.dev) sites. Thanks to Tolkien for the name.

## Setting up

Click "Use this template" on [this repo](https://github/jdsteinbach/elevensies).

## Local Dev

Run the Eleventy site with:

```sh
$ npm run start
```

Elevensies adds `cssnano` and `rollup-plugin-terser` to CSS & JS builds for production. To emulate this in local dev, use:

```sh
$ npm run start:prod
```

## Build for Deploy

Build the Eleventy site to `_site` with:

```sh
$ npm run build
```

Elevensies adds `cssnano` and `rollup-plugin-terser` to CSS & JS builds for production. To deploy without these tools, use:

```sh
$ npm run build:dev
```

## Test Files

Sorry, I've still got test content files in this repo (`src/index.md`, `src/assets/js/index.js`, `src/assets/scss/styles.scss`). Overwrite them for your work.

_ToDo: move test content files to a test suite or something._
