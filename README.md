# Webpack with Babel for Typescript

In this template we will check a Typescript app with retrocompatibility to older versions thanks to Babel.

## Requirements

* [Node](https://nodejs.org/en/)


## Introduction

* **[Webpack](https://webpack.js.org)** -> Webpack is a bundler for modules. Main purpose is to bundle JavaScript modules in a browser.
* **[Babel](https://babeljs.io)** -> Javascript compiler, tansform modern Javascript into older versions.
* **[Typescript](https://www.typescriptlang.org)** -> Typescript is an open-source typed language which build on Javascript.

## Goal

The Goal of this application is to bundle all the files in development process to a single file called **bundle.js** which will be deployed as a single file with retrocompatibility.

![Webpack Flowchart](meta/flowchart-webpack.png)

## Setup

1. Download node and run the following command

```
npm install
```

2. Develop your project

You can start to develop your project, use the ```index.html```, ```index.ts```, and ```styles.scss``` files to start the development process. These files, alongside all the imports will be later bundled and compiled onto a minimize version in the ```./dist/*``` folder.

3. Start dev server

To start a new dev server with auto-reloading just run ```npm run start:dev``` to start a new webserver.

## Deployment

To create a production build:

```
npm run build-prod
```

To create a development build:

```
npm run build-dev
```

## Running

```
node dist/bundle.js
```