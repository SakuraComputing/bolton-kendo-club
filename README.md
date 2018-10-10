# Bolton Kendo Club

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.0.1-brightgreen.svg" alt="vue">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
 </p>

This is a project written using Vue 3.0 and TypeScript, Express, Mongo and Node (API layer).  It's tested using Jest. It uses yarn as a package manager. This source code belongs to the club.

## Getting Started
```
clone from Github
yarn install
```

### Running the Application Locally

Compiles and hot-reloads for development using concurrently to run the App server on port 8080 and the dev server on port 5000
```
yarn run dev
```

### Compiles and minifies for production. This will do a local build and push to the dist directory.
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```

## Deploying the code 

Currently this is deployed and hosted on Heroku.  The build occurs on the server its self. Ensure git is setup as follows. By pushing to Heroku a build will be triggered.

```
https://git.heroku.com/bolton-kendo-club.git

git push heroku master
```

## Built with
* [Vue.js](https://vuejs.org/) - The web framework used
* [node.js](https://nodejs.org/en/) - API Layer
* [Express](https://expressjs.com/) - Server
* [Mongo](https://www.mongodb.com/) - Database (Cloud hosted on mLab)
* [Mongoose](https://mongoosejs.com/) - Database Middleware
* [Jest](https://jestjs.io/) - Jest Test Tool
