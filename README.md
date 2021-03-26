# Redis and Node.js basic integration

Just a simple Redis integration using Node.js as the main framework.

## Getting Started

These instructions will set you up to get you up and running on your local machine in no time!

### Prerequisites

Below there's a list of all the prerequisites the project needs before running:

- [Node.js][nodejs-link] - We used the version `v15.8.0`
- [Docker][docker-link] - We used the version `20.10.5, build 55c4c88966`
- [Docker Compose][docker-compose-link] - We used the version `1.28.5, build unknown`

### Installing

After installing everything needed, you can use either `npm` or `yarn` to install the dependencies. Just run

```
npm i
```

or

```
yarn install
```

on root directory to install it all and you are good to go!

### Setting up environment variables

The default values will usually be enough for a common test, but if you need to set it up to work with another host, you will need some environment variables.

For this, you have to set a `.env` file at the root of the project having, at least, this parameters

```
REDIS_PORT=...
REDIS_HOST=...
REDIS_PASSWORD=...
```

Where:

`REDIS_PORT` corresponds to the port your Redis server will be exposing. The default value for this is `6379`.

`REDIS_HOST` is the host in your Redis server.

`REDIS_PASSWORD` is the password you need to log in you Redis server.

## 

## Running the tests

Before doing anything, run `docker-compose up` at the root of the project. This will set up a Redis server and run it for you.

With the server setup out of the way, now you can run the tests. We use [Jest][jest-link] for testing, which is specified in the project dependency file. All you need to do is type:

```
npm test
```

for `npm` or

```
yarn test
```

for `yarn`


<!-- external links -->
[nodejs-link]: https://nodejs.org/en/
[docker-link]: https://www.docker.com/
[docker-compose-link]: https://docs.docker.com/compose/install/
[jest-link]: https://jestjs.io/
