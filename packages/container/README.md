# @armscye/container

> A collection of shared standard TypeScript definitions (@container).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/container
```

or using yarn:

```sh
yarn add @armscye/container --dev
```

## Reference

### ClassProvider `Interface`

Configures the `Container` to return an instance of `useClass` for a token.

```ts
interface ClassProvider<T = any> {
  provide: ProviderToken;

  useClass: NoArgument<T>;

  shared?: boolean;
}
```

**Properties**

| Property                  | Description                                |
| ------------------------- | ------------------------------------------ |
| provide: ProviderToken    | A provider token.                          |
| useClass: NoArgument<any> | A class to instantiate for the `token`.    |
| shared?: boolean          | When true, the created instance is cached. |

### Container `Interface`

Describes the interface of a container that exposes methods to read its entries.

```ts
interface Container {
  get<T>(token: ProviderToken): T;

  has(token: ProviderToken): boolean;
}
```

**Methods**

    get(token: ProviderToken): T

Retrieves an entry from the container based on its provider token.

_Parameters_

- `token`: The unique identifier of the entry you want to retrieve.

_Returns_

The entry associated with the provided token, if found.

_Throws_

`Error` if the entry doesn't exist or an error occurs during retrieval.

    has(token: ProviderToken): boolean

Checks whether an entry for a specific provider token exists in the container.

_Parameters_

`token`: The unique identifier of the entry you want to check for.

_Returns_

`true` if an entry for the provided token exists, `false` otherwise.

### ExistingProvider `Interface`

Configures the `Container` to return a value of another `useExisting` token.

```ts
interface ExistingProvider<T = any> {
  provide: ProviderToken;

  useExisting: T;

  shared?: boolean;
}
```

**Properties**

| Property                   | Description                                |
| -------------------------- | ------------------------------------------ |
| provide: ProviderToken     | A provider token.                          |
| useExisting: ProviderToken | Existing `token` to return.                |
| shared?: boolean           | When true, the created instance is cached. |

### FactoryProvider `Interface`

Configures the `Container` to return a value by invoking a `useFactory` function.

```ts
interface FactoryProvider<T = any> {
  provide: ProviderToken;

  useFactory: Factory<T>;

  shared?: boolean;
}
```

**Properties**

| Property               | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| provide: ProviderToken | A provider token.                                                 |
| useFactory: Factory    | A factory function to invoke to create an object for the `token`. |
| shared?: boolean       | When true, the created instance is cached.                        |

### Factory `Type`

A function to invoke to create an object. The function is invoked with an instance of the container in order to access required dependencies.

```ts
type Factory<T = any> = (container: Container) => T;
```

### ProviderToken `Type`

Token that can be used to retrieve an instance from a container.

```ts
type ProviderToken = string | symbol;
```

### Provider `Type`

Describes how the `Container` should be configured.

```ts
type Provider<T = any> =
  | ValueProvider<T>
  | ClassProvider<T>
  | FactoryProvider<T>
  | ExistingProvider<T>;
```

### ValueProvider `Interface`

Configures the `Container` to return a value for a token.

```ts
interface ValueProvider<T = any> {
  provide: ProviderToken;

  useValue: T;
}
```

**Properties**

| Property               | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| provide: ProviderToken | A provider token.                                           |
| useValue: any          | The actual value that will be provided for the given token. |

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
