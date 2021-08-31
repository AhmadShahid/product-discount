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

## Run Migrations and Seeding To Create a Database Schema with certain predefined data

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

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Trying out the API Using Docker

You'll need [Docker](https://www.docker.com/) for that. Once you've got it installed on your machine, just clone the repo and run the

```bash
# development
$ docker-compose up --build dev
# production
$ docker-compose up --build prod
```

The API will be listening for your requests at `http://localhost/api`.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please <a href="https://docs.nestjs.com/support" rel="nofollow">read more here</a>

## What's the stack used in this project?

- **[Nest.js](https://nestjs.com/)** is a [TypeScript](https://www.typescriptlang.org/)-based Node.js API framework. It looks like if Angular and Express got physical. It's pretty knew and a bit rough around the edges, but [Kamil Myśliwiec](https://github.com/kamilmysliwiec) is doing an awesome job maintaining it.
- **[Postgres](https://www.postgresql.org/)** is a very well know Open Source relational database.
- **[SequelizeORM](https://sequelize.org/)** Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more projects.
- **[Jest](https://facebook.github.io/jest/)** is a testing platform from Facebook Code. It's easy to configure and provides out-of-the-box mocking and code coverage reporting.
- **[Docker](https://docker.com/)** takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development

## What's coming in next release that is important for this system?

- Add authorization to restrict users to performed different operations using roles and permissions.
- Secured POST & DELETE endpoints (other that /entries.)
- Swagger definition generated from code.

## Stay in touch

- Author - [Shahid Ahmad]
- Website - [https://www.ai-bees.io/](https://www.ai-bees.io/)
- Twitter - [@shahid](https://twitter.com/shahida09454170)
