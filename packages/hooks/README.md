# @armscye/hooks

> A collection of shared standard TypeScript definitions.

## Installation

Using npm:

```sh
npm install --save-dev @armscye/hooks
```

or using yarn:

```sh
yarn add @armscye/hooks --dev
```

## Interfaces

### Shutdown Hook

```ts
/**
 * Interface defining methods to respond to system signals (when application gets
 * shutdown by, e.g., SIGTERM)
 */
export interface ShutdownHook {
  /**
   * Called after connections close.
   *
   * @param signal the system signal
   */
  onShutdown(signal?: string): any;
}
```

### Startup Hook

```ts
/**
 * Interface defining method called during the application startup.
 */
export interface StartupHook {
  /**
   * Called before listening for connections.
   */
  onStartup(): any;
}
```

## Types

### Hook Provider

```ts
export type HookProvider<T = any> =
  | string
  | symbol
  | object
  | Type<T>
  | Function;
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
