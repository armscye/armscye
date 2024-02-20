# @armscye/hooks

> A collection of shared standard TypeScript definitions (@hooks).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/hooks
```

or using yarn:

```sh
yarn add @armscye/hooks --dev
```

## Reference

### ShutdownHook `Interface`

Interface defining methods to respond to system signals (when application gets shutdown by, e.g., `SIGTERM`).

```ts
interface ShutdownHook {
  onShutdown(signal?: string): any;
}
```

The `onShutdown` method is called when an application receives a system signal indicating it's time to gracefully shut down. Common signals include `SIGTERM` (termination request) and `SIGINT` (interrupt).

The optional `signal` parameter might be provided, revealing the specific signal received.

**Usage notes**

Here's a basic example demonstrating how to use `ShutdownHook` to close a database connection before shutdown:

```ts
class MyShutdownHook implements ShutdownHook {
  onShutdown(signal?: string) {
    // Access and close database connection
    const db = /* get database connection */;
    db.close()
      .then(() => console.log("Database connection closed"))
      .catch(error => console.error("Error closing database:", error));
  }
}

// Register the shutdown hook
server.registerStartupHook(new MyShutdownHook())
```

### StartupHook `Interface`

Interface defining method called during the application startup.

```ts
interface StartupHook {
  onStartup(): any;
}
```

The `onStartup` method is called before the application begins listening for incoming connections.

**Usage notes**

Here's a basic example demonstrating how to use a StartupHook to connect to a database:

```ts
class MyStartupHook implements StartupHook {
  onStartup() {
    // Connect to the database
    database.connect();
    console.log('Database connection established.');
  }
}

// Register the startup hook
server.registerStartupHook(new MyStartupHook());
```

### HookProvider `Type`

Describes how hooks are provided in an application.

```ts
type HookProvider<T = any> = string | symbol | object | Type<T> | Function;
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
