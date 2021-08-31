<p align="center">
  <a href="https://www.ai-bees.io/" target="blank"><img src="https://assets.website-files.com/601bb571b7f353ca5b3eb81c/606da82d43ccdd5cd0226492_Group%2010902.png" width="320" alt="AI Commerce Logo" /></a>
</p>

  <p align="center">A discount based system that will give you the discount percentage on different products.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://twitter.com/shahida09454170" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Installation

```bash
$ npm install
```

## Quick start

- You will need to have `Node.js` installed, this project has been tested with Node version [12.X](https://nodejs.org/en/blog/release/v12.22.1/) and [14.X](https://nodejs.org/en/blog/release/v14.17.5/)

```bash
# clone this repo
$ git clone https://github.com/AhmadShahid/product-discount.git
# go to product-discount dir
$ cd product-discount
# copy .env.template to .env.development for development
$ cp .env.template .env.development
# copy .env.template to .env.production for production
$ cp .env.template .env.production
# install dependencies
$ npm install
```

## Run migrations and seeds command To create a database schema with data

````bash
# migrations
$ npm run migrate

# seed
$ npm run seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
````

- Open http://localhost:5000/api/v1 in browser

---

## Docker

- Install https://docs.docker.com/compose/install/

```bash
# copy .env.template to .env.development for dev
$ cp .env.template .env.development
# copy .env.template to .env.development for production
$ cp .env.template .env.production
# build or rebuild services
$ docker-compose build
# create and start development containers
$ docker-compose up dev
# create and start production containers
$ docker-compose up prod
# stop and remove resources
$ docker-compose down
```

- Open http://localhost:5000 in browser

---

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## API Documentation

The API documentation uses [swagger](https://swagger.io/) at http://localhost:5000/api/.

## Features

- Is `100% Free` and `Open Source`
- Is `100% Free` Secure
- Token based authentication using JWT(JSON Web Token).
- Easily add or update discounts
- Multi-level category suport
- Swagger & Docker support
- Database Versioning support using Migrations.
- Easy association of discount on category and product level
- Get Discount percentage on products.
- Unit test & full test coverage.
- Supports [REST API](api/README.md) (Application Programming Interface)

## Upcoming Features that is important for this system?

- Add authorization to restrict users to performed different operations using roles and permissions.
- Error handling and Error log support to easily track application issues.
- API throttling support to restrict user to send to many request in specific time frame.
- currently discount is fixed which is percentage based but in future we will create flexible and extensible promotion/discount engine to handle multiple scanerios (Gift Cards, Birthday Promotions, Special Day Promotions etc)

## Support

AI Commerce is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please <a href="https://docs.nestjs.com/support" rel="nofollow">read more here</a>

## What's the stack used in this project?

- **[Nest.js](https://nestjs.com/)** is a [TypeScript](https://www.typescriptlang.org/)-based Node.js API framework. It looks like if Angular and Express got physical. It's pretty knew and a bit rough around the edges, but [Kamil Myśliwiec](https://github.com/kamilmysliwiec) is doing an awesome job maintaining it.
- **[Postgres](https://www.postgresql.org/)** is a very well know Open Source relational database.
- **[SequelizeORM](https://sequelize.org/)** Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more projects.
- **[Jest](https://facebook.github.io/jest/)** is a testing platform from Facebook Code. It's easy to configure and provides out-of-the-box mocking and code coverage reporting.
- **[Docker](https://docker.com/)** takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development

## Stay in touch

- Author - [Shahid Ahmad]
- Website - [https://www.ai-bees.io/](https://www.ai-bees.io/)
- Twitter - [@shahid](https://twitter.com/shahida09454170)

```

```
