# @armscye/core

> A collection of shared standard TypeScript definitions.

## Installation

Using npm:

```sh
npm install --save-dev @armscye/core
```

or using yarn:

```sh
yarn add @armscye/core --dev
```

## Interfaces

### Abstract

```ts
/**
 * Represents an abstract class `T`, if applied to a concrete class it would stop being
 * instantiable.
 */
export interface Abstract<T = any> extends Function {
  prototype: T;
}
```

### No Argument

```ts
/**
 * Represents an instantiable class `T` with a default (no-argument) constructor.
 */
export interface NoArgument<T = any> extends Function {
  new (): T;
}
```

### Type

```ts
/**
 * Represents an instantiable class `T` with constructor parameters.
 */
export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
