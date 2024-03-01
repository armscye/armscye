# @armscye/handler

> A collection of shared standard TypeScript definitions (@handler).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/handler
```

or using yarn:

```sh
yarn add @armscye/handler --dev
```

## Reference

### NotchHandler `Interface`

This interface defines how to handle a server request and generate a corresponding response.

```ts
interface NotchHandler<TRequest = any, TResponse = any> {
  handle(req: TRequest, res: TResponse, next?: any): any;
}
```

The `handle` method is the core of the `NotchHandler` interface. It takes three arguments:

- `req`: The incoming HTTP request object.
- `res`: The response object to be sent back to the client.
- `next` (optional): A function to pass control to the next middleware in the chain, if applicable.

**Usage notes**

Here's a basic example demonstrating how to use a `NotchHandler` to handle a HTTP request and return a simple response:

```ts
class MyHandler implements NotchHandler {
  handle(req: any, res: any) {
    // Access request details:
    const method = req.method;
    const url = req.url;
    const headers = req.headers;

    // Perform any necessary logic...

    // Return a response:
    return res.status(200).json({ message: 'Hello from the handler!' });
  }
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
