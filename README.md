# Webpack with Babel for Typescript

> Typescript project with Webpack and Babel support for bundling and compiling to backward compatibility

![Header](meta/Header.png)

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

2. Change the **src/images/icon.png** to modify the favicon, see more [here](https://github.com/jantimon/favicons-webpack-plugin)

3. Start modifying the html, css and typescript files located in **src** folder

4. To start livewatch of the type just run

```
npm run type-check:watch
```

## Deployment

To create a production build:

```
npm run build
```

## Script

If you want to create a deployment zip file including a dockerized server that serves your webapp through the 443 and 80 ports just run the **deploy.sh** script.
The script accepts de following arguments

```
bash deploy.sh -u yourdomain.com -d NameOfFile
```

### Certificates
Right now the certificates are self firmed and invalid, just replace the old certificates inside *nginx/certificates* with the new ones and modify the *nginx.conf* file with the new name of the files.

### Nginx Configuration
This project uses nginx as a web server/reverese proxy, you can modify the properties inside *nginx/nginx.conf*