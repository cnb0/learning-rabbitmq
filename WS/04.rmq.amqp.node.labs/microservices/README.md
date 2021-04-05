# competing-services-example

An example of how to use the [`amqp-simple-pub-sub`] 
library to implement competing micro-services.

## See Also

- [itnext.io/connecting-competing-microservices-using-rabbitmq](https://itnext.io/connecting-competing-microservices-using-rabbitmq-28e5269861b6)


## To Run

1. Ensure you have [Docker](https://www.docker.com) installed.
2. Clone this repo to your local machine, then,
3. From within the project folder:

   ```sh
   docker-compose up -d
   ```

4. Wait a few seconds for RabbitMQ to start, then:

   ```sh
   npm start
   ```

5. You can `crtl-c` when you get tired of watching it.

## Development

 
### Prerequisites

- [NodeJS](htps://nodejs.org), 8.10.0+ (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
- [Docker](https://www.docker.com) (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the homebrew version)

### Initialisation

```sh
npm install
```

### To Start the queue server for integration testing.

```sh
docker-compose up -d
```

Runs Rabbit MQ.

Run `docker-compose down` to stop it.

### Test it

- `npm test` — runs the unit tests (quick and does not need `rabbitmq` running)

### Lint it

```sh
npm run lint
```

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
