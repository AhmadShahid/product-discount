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
- You will also need to have install `Postgres` if you are running it without docker

```bash
# clone this repo
$ git clone https://github.com/AhmadShahid/product-discount.git
# go to product-discount dir
$ cd product-discount
# copy .env.example to .env.development for development
$ cp .env.example .env.development
# copy .env.example to .env.production for production
$ cp .env.example .env.production
# install dependencies
$ npm install
# create database on postgre
$ CREATE DATABASE aibees_ecommerce;
```

## Run migrations and seeds command to create a database schema with data

```bash
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
```

- Open http://localhost:5000/api/ in browser

## Docker

- Install https://docs.docker.com/compose/install/

```bash
# copy .env.example to .env.development for dev
$ cp .env.example .env.development
# copy .env.example to .env.development for production
$ cp .env.example .env.production
# build or rebuild services
$ docker-compose build
# create and start development containers
$ docker-compose up dev
# create and start production containers
$ docker-compose up prod
# to run migration and seeder we need Container Id and to get container execute the below command
$ docker ps
# above command will give you all the container just copy the id of the container where name is nestjs-api-dev:1.0.0
# execute the below command to run the migrations
$ docker exec -it ${Container Id} npx sequelize-cli db:migrate
# to run seeders
$ docker exec -it ${Container Id} npx sequelize-cli db:seed:all
# stop and remove resources
$ docker-compose down
```

- Open http://localhost:5000/api/ in browser

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Demo Users

- admin@gmail.com/admin123
- customre@gmail.com/customer123

## API Documentation

The API documentation uses [swagger](https://swagger.io/) at http://localhost:5000/api/.

# Application Structure Explaination

> Application is divided into 6 modules

    .
    ├── App/Root Modules        # Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph
    ├── Core                    # This module is reponsible for database connection, migration and regiseter other guards, pipes etc that we can utilize on other feature modules
    ├── User                    # This module is repsonsible for user saving, finding a user by email or id, etc
    ├── Auth                    # This module is repsonsible for user login/signup
    ├── Discount                # This module is handle operations related to the discount like creation of new discount, find an existing discount etc
    ├── Order                   # This module is repsonsible for the calculation of  disocunt percentage in invoice final amount

## Features

- Is `100% Free` and `Open Source`
- Is `100% Free` Secure
- Token based authentication using JWT(JSON Web Token).
- Validations support e.g email, passward week, unique etc.
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
- Currency Support
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
