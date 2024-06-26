# @armscye/logging

> A collection of shared standard TypeScript definitions (@logging).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/logging
```

or using yarn:

```sh
yarn add @armscye/logging --dev
```

## Reference

### Logger `Interface`

Describes a common interface for logging.

```ts
interface Logger {
  trace(msg: any, ...args: unknown[]): any;

  debug(msg: any, ...args: unknown[]): any;

  info(msg: any, ...args: unknown[]): any;

  warn(msg: any, ...args: unknown[]): any;

  error(msg: any, ...args: unknown[]): any;
}
```

The interface offers various methods for logging messages at different levels of severity:

- `trace`: Log a message at the TRACE level.
- `debug`: Log a message at the DEBUG level.
- `info`: Log a message at the INFO level.
- `warn`: Log a message at the WARN level.
- `error`: Log a message at the ERROR level.

Each method takes the message, usually a string, as the first argument and allows additional arguments for providing context (variables, objects, etc.).

**Usage notes**

Here's an example demonstrating how to use the `Logger` interface:

```ts
class MyLogger implements Logger {}

const logger = new MyLogger();

logger.info('Starting service processing...');

try {
  // ... service logic
} catch (error) {
  logger.error('An error occurred:', error);
}

logger.info('Service processing completed.');
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
