# @armscye/middleware

> A collection of shared standard TypeScript definitions (@middleware).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/middleware
```

or using yarn:

```sh
yarn add @armscye/middleware --dev
```

## Reference

### NotchMiddleware `Interface`

Participant in processing a server request and response.

```ts
interface NotchMiddleware<TRequest = any, TResponse = any> {
  process(req: TRequest, res: TResponse, next?: any): any;
  process(err: any, req: TRequest, res: TResponse, next?: any): any;
}
```

The `process` method in the `NotchMiddleware` is responsible for handling incoming server requests and participating in the overall request-response cycle. The method takes three main arguments:

- `req`: This represents the incoming HTTP request.
- `res`: This represents the response object that will be sent back to the client.
- `next` (optional): Allows passing control to the next middleware in a chain or to the final request handler.

Some middleware implementations might also handle errors. They receive an additional `err` argument before the `req`, `res`, and `next` arguments. This allows them to:

- Log the error for debugging purposes.
- Send an appropriate error response to the client.
- Call `next()` to pass the error to the next middleware for further handling.

**Usage notes**

Here's a basic example demonstrating how to use a `NotchMiddleware` for authentication:

```ts
class AuthMiddleware implements NotchMiddleware {
  process(req, res, next) {
    // Extract authentication token from request headers
    const token = req.headers.authorization;

    // Validate token (replace with actual validation logic)
    if (isValidToken(token)) {
      // User is authenticated, proceed to the next middleware or handler
      next();
    } else {
      // Unauthorized access, send error response
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
