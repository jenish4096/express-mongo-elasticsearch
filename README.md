# Express ES2017 REST API Boilerplate
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![npm version](https://badge.fury.io/js/express-rest-es2017-boilerplate.svg)](https://badge.fury.io/js/express-rest-es2017-boilerplate) [![Build Status](https://travis-ci.org/danielfsousa/express-rest-es2017-boilerplate.svg?branch=master)](https://travis-ci.org/danielfsousa/express-rest-es2017-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/danielfsousa/express-rest-es2017-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/danielfsousa/express-rest-es2017-boilerplate?branch=master)[![Greenkeeper badge](https://badges.greenkeeper.io/danielfsousa/express-rest-es2017-boilerplate.svg)](https://greenkeeper.io/)

Boilerplate/Generator/Starter Project for building RESTful APIs and microservices using Node.js, Express and MongoDB

## Features

 - No transpilers, just vanilla javascript
 - ES2017 latest features like Async/Await
 - CORS enabled
 - Uses [yarn](https://yarnpkg.com)
 - Express + MongoDB ([Mongoose](http://mongoosejs.com/))
 - Consistent coding styles with [editorconfig](http://editorconfig.org)
 - [Docker](https://www.docker.com/) support
 - Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
 - Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
 - Request validation with [joi](https://github.com/hapijs/joi)
 - Gzip compression with [compression](https://github.com/expressjs/compression)
 - Linting with [eslint](http://eslint.org)
 - Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
 - Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
 - Git hooks with [husky](https://github.com/typicode/husky) 
 - Logging with [morgan](https://github.com/expressjs/morgan)
 - Authentication and Authorization with [passport](http://passportjs.org)
 - API documentation geratorion with [apidoc](http://apidocjs.com)
 - Continuous integration support with [travisCI](https://travis-ci.org)
 - Monitoring with [pm2](https://github.com/Unitech/pm2)

## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/danielfsousa/express-rest-es2017-boilerplate
cd express-rest-es2017-boilerplate
rm -rf .git
```

Install dependencies:

```bash
npm
```

Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
npm run dev
```

## Running in Production

```bash
npm run start
```

## Lint

```bash
# lint code with ESLint
npm run lint

# try to fix ESLint errors
npm run lint:fix

# lint and watch for changes
npm run lint:watch
```

## Test

```bash
# run all tests with Mocha
npm run test

# run unit tests
npm run test:unit

# run integration tests
npm run test:integration

# run all tests and watch for changes
npm run test:watch

# open nyc test coverage reports
npm run coverage
```

## Validate

```bash
# run lint and tests
npm run validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Docker

```bash
# run container locally
npm run docker:dev
or
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# run container in production
npm run docker:prod
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# run tests
npm run docker:test
or
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
npm run deploy
or
sh ./deploy.sh
```
## Seeder

Run seeder script: 
```bash
npm run seed