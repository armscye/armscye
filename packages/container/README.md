# @armscye/container

> A collection of shared standard TypeScript definitions.

## Installation

Using npm:

```sh
npm install --save-dev @armscye/container
```

or using yarn:

```sh
yarn add @armscye/container --dev
```

## Interfaces

### Class Provider

```ts
/**
 * Configures the `Container` to return a value by instantiating `useClass` class.
 */
export interface ClassProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Class to instantiate for the `token`.
   */
  useClass: NoArgument<T>;

  /**
   * Whether the created instance should be cached.
   */
  shared?: boolean;
}
```

### Container

```ts
/**
 * Describes the interface of a container that exposes methods to read its entries.
 */
export interface Container {
  /**
   * Find an entry of the container based on the provided token.
   *
   * @param token the provider token of the entry to look for
   * @returns an entry from the container if defined
   * @throws Error if no entry was found for the token
   * @throws Error if error while retrieving the entry
   */
  get<T>(token: ProviderToken): T;

  /**
   * Check if an entry for the given provider token exists.
   *
   * @param token the provider token of the entry to look for
   * @returns whether an entry for the given provider exists
   */
  has(token: ProviderToken): boolean;
}
```

### Existing Provider

```ts
/**
 * Configures the `Container` to return a value of another `useExisting` token.
 */
export interface ExistingProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Existing `token` to return.
   */
  useExisting: T;

  /**
   * Whether the created instance should be cached.
   */
  shared?: boolean;
}
```

### Factory Provider

```ts
/**
 * Configures the `Container` to return a value by invoking a `useFactory` function.
 */
export interface FactoryProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * A function to invoke to create an instance for this `token`. The function is
   * invoked with resolved values of token`s from an instance of the container.
   */
  useFactory: Factory<T>;

  /**
   * Whether the created instance should be cached.
   */
  shared?: boolean;
}
```

### Value Provider

```ts
/**
 * Configures the `Container` to return a value for a token.
 */
export interface ValueProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * The value to inject.
   */
  useValue: T;
}
```

## Types

### Factory

```ts
/**
 * Represents type for a factory. A factory is a function that is able to create an object.
 * It is provided with an instance of the container in order to access required dependencies.
 */
export type Factory<T = any> = (container: Container) => T;
```

### Provider Token

```ts
/**
 * Token that can be used to retrieve an instance from a container.
 */
export type ProviderToken = string | symbol;
```

### Provider

```ts
export type Provider<T = any> =
  | ValueProvider<T>
  | ClassProvider<T>
  | FactoryProvider<T>
  | ExistingProvider<T>;
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
