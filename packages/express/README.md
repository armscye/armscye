# @armscye/express

> A collection of shared standard TypeScript definitions.

## Installation

Using npm:

```sh
npm install --save-dev @armscye/express
```

or using yarn:

```sh
yarn add @armscye/express --dev
```

## Interfaces

### Notch Handler

```ts
/**
 * Handles a server request and produces a response.
 */
export interface NotchHandler<TRequest = any, TResponse = any> {
  /**
   * Processes an HTTP request and generates an HTTP response.
   *
   * This method is responsible for receiving an incoming request, potentially
   * performing some logic or interacting with other code, and returning a
   * response object.
   */
  handle(req: TRequest, res: TResponse, next?: any): any;
}
```

### Notch Middleware

```ts
/**
 * Participant in processing a server request and response.
 */
export interface NotchMiddleware<TRequest = any, TResponse = any> {
  /**
   * Process an incoming server request.
   *
   * Processes an incoming server request in order to produce a response.
   * If unable to produce the response itself, it may delegate to the provided
   * request handler to do so.
   */
  process(req: TRequest, res: TResponse, next?: any): any;
  process(err: any, req: TRequest, res: TResponse, next?: any): any;
}
```

### Response Generator

```ts
/**
 * Describes the interface for composing and sending HTTP responses.
 */
export interface ResponseGenerator {
  /**
   * Sends the composed HTTP response.
   *
   * @param response the in-flight response object
   * @param body the response payload
   * @param statusCode a 3-digit HTTP status code
   */
  reply(response: any, body: any, statusCode?: number): any;
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
