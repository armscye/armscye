# @armscye/http

> A collection of shared standard TypeScript definitions (@http).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/http
```

or using yarn:

```sh
yarn add @armscye/http --dev
```

## Reference

### HttpAdapter `Interface`

The `HttpAdapter` interface provides a standardized way to interact with different HTTP server implementations within a web application. It abstracts away the details of specific frameworks (like Express, Fastify, etc.), enabling the creation of framework-independent code that interacts with the underlying HTTP server.

```ts
interface HttpAdapter<TServer = any> {
  getInstance<T = any>(): T;

  getHttpServer(): TServer;

  getType(): string;

  listen(port: number | string, callback?: () => void): Promise<any>;
  listen(
    port: number | string,
    hostname: string,
    callback?: () => void,
  ): Promise<any>;

  initHttpServer(): void;

  close(): Promise<any>;
}
```

**Methods**

#### `getInstance<T = any>()`

Retrieves the underlying HTTP server application instance, such as an Express or Fastify application.

#### `getHttpServer()`

Retrieves the native HTTP server object managed by the framework (e.g., Node.js's `http.Server` object).

#### `getName()`

Returns the name of the adapter ("Express", "Fastify", etc.), useful for debugging or identifying which specific adapter is in use.

#### `listen(port, [hostname], [callback]): Promise<any>`

Starts the HTTP server and begins listening for incoming connections on the specified port.

_Parameters_

- `port` (Required): The port number to listen on.
- `hostname` (Optional): The hostname (e.g., "localhost") to bind the server to.
- `callback` (Optional): A function to be executed when the server starts listening.

_Returns_

A Promise that resolves to the underlying HTTP server instance once the server is listening.

#### `initHttpServer()`

Performs any internal setup or initialization required by the adapter to prepare the HTTP server for handling requests.

#### `close() : Promise<any>`

Signals the server to stop accepting new connections, allowing existing connections to complete.

**Usage notes**

#### Example: Using `HttpAdapter` with Express

```ts
import { HttpAdapter } from '@armscye/http';
import express from 'express';

class ExpressAdapter implements HttpAdapter {
  private instance: express.Application;

  constructor() {
    this.instance = express();
  }

  getInstance(): express.Application {
    return this.instance;
  }

  // ... Other HttpAdapter method implementations
}

const httpAdapter = new ExpressAdapter();
const app = httpAdapter.getInstance();

app.get('/', (req, res) => {
  res.send('Hello from an Express server!');
});

httpAdapter.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
```

#### Example: Using `HttpAdapter` with Fastify

```ts
import { HttpAdapter } from '@armscye/http';
import fastify from 'fastify';

class FastifyAdapter implements HttpAdapter {
  private instance: fastify.FastifyInstance;

  constructor() {
    this.instance = fastify();
  }

  getInstance(): fastify.FastifyInstance {
    return this.instance;
  }

  // ... Other HttpAdapter method implementations
}

const httpAdapter = new FastifyAdapter();
const app = httpAdapter.getInstance();

app.get('/', async (req, res) => {
  res.send('Hello from a Fastify server!');
});

httpAdapter.listen(8081, () => {
  console.log('Fastify server listening on port 8081');
});
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
