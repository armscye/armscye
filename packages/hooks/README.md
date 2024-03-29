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

Interface defining method to respond to system signals (when application gets shutdown by, e.g., `SIGTERM`).

```ts
interface ShutdownHook {
  onShutdown(signal?: string): any;
}
```

The `onShutdown` method is called when an application receives a system signal indicating it's time to gracefully shutdown. Common signals include `SIGTERM` (termination request) and `SIGINT` (interrupt).

The optional `signal` parameter might be provided, revealing the specific signal received.

**Usage notes**

Here's a basic example demonstrating how to use `ShutdownHook` to close a database connection:

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

Here's a basic example demonstrating how to use a `StartupHook` to connect to a database:

```ts
class MyStartupHook implements StartupHook {
  onStartup() {
    // Connect to the database
    database.connect();
    console.log('Database connection established.');
  }
}
```

### HookProvider `Type`

Describes type structure for hooks.

```ts
type HookProvider = string | symbol | object | Type<any> | Function;
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
