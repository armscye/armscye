# @armscye/core

> A collection of shared standard TypeScript definitions (@core).

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

Represents an abstract class constructor that creates instances of `T`.

```ts
interface Abstract<T = unknown> extends Function {
  prototype: T;
}
```

### NoArgument `Interface`

Represents a constructable class `T` with a no-argument constructor.

```ts
interface NoArgument<T = unknown> extends Function {
  new (): T;
}
```

### Type `Interface`

Represents a constructable class that creates instances of `T`.

```ts
interface Type<T = unknown> extends Function {
  new (...args: any[]): T;
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
