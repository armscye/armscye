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

## Reference

### Abstract `Interface`

Represents an abstract class `T`, if applied to a concrete class it would stop being instantiable.

```ts
interface Abstract<T = any> extends Function {
  prototype: T;
}
```

### NoArgument `Interface`

Represents an instantiable class `T` with a default (no-argument) constructor.

```ts
interface NoArgument<T = any> extends Function {
  new (): T;
}
```

### Type `Interface`

Represents an instantiable class `T` with constructor parameters.

```ts
interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
