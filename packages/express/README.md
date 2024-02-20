# @armscye/express

> A collection of shared standard TypeScript definitions (@express).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/express
```

or using yarn:

```sh
yarn add @armscye/express --dev
```

## Reference

### NotchHandler `Interface`

Handles a server request and produces a response.

```ts
interface NotchHandler<TRequest = any, TResponse = any> {
  handle(req: TRequest, res: TResponse, next?: any): any;
}
```

The `handle` method is the heart of the `NotchHandler`. It takes three arguments:

- `req`: The incoming request object containing information like headers, body, and URL parameters.
- `res`: The response object used to send data back to the client. You'll typically set properties like status code, headers, and body on this object.
- `next`: An optional callback function that allows you to pass control to another handler if needed. This is often used for middleware or chaining requests.

**Usage notes**

Here's a basic example demonstrating how to use a `NotchHandler` to handle a GET request and return a simple response:

```ts
class MyHandler implements NotchHandler {
  handle(req: any, res: any) {
    // Access request details:
    const method = req.method;
    const url = req.url;
    const headers = req.headers;

    // Perform any necessary logic...

    // Return a response:
    return res.status(200).json({ message: "Hello from the handler!" });
  }
}

// Usage:
const myHandler = new MyHandler();
const app = /* your server-side application */;
app.get(myHandler.handle);
```

### NotchMiddleware `Interface`

Participant in processing a server request and response.

```ts
interface NotchMiddleware<TRequest = any, TResponse = any> {
  process(req: TRequest, res: TResponse, next?: any): any;
  process(err: any, req: TRequest, res: TResponse, next?: any): any;
}
```

The `process` method in the `NotchMiddleware` is responsible for handling incoming server requests and participating in the overall request-response cycle. The method takes three main arguments:

- `req`: This represents the incoming HTTP request object, containing details like method, URL, headers, and body.
- `res`: This represents the HTTP response object that will be sent back to the client. You can use methods like status and json to set the response status code and body.
- `next` (optional): This is a function that allows the middleware to pass control to the next middleware in the chain or the final request handler.

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

    // Validate token (replace with your actual validation logic)
    if (isValidToken(token)) {
      // User is authenticated, proceed to the next middleware or handler
      next();
    } else {
      // Unauthorized access, send error response
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}

// Usage:

const authMiddleware = new AuthMiddleware();
const app = /* your server-side application */;
app.use(authMiddleware.process);

// This middleware will be executed before any request handler.
```

### Response Generator `Interface`

Describes the interface for composing and sending HTTP responses.

```ts
interface ResponseGenerator {
  reply(response: any, body: any, statusCode?: number): any;
}
```

The `reply` method within the `ResponseGenerator` is responsible for the final step in crafting and delivering an HTTP response to the client. The method takes three arguments:

- `response`: An object representing the in-flight response. It might contain properties like headers, cookies, or connection information.
- `body`: The actual content of the response, which can be:
  - A string representing text or HTML.
  - An object that will be serialized to JSON (e.g., for sending data).
  - Any other data type supported by your framework.
- `statusCode (optional)`: The HTTP status code indicating the outcome of the request (e.g., 200 for success, 404 for not found). If not provided, a default code (often 200) might be used.

**Usage notes**

Here's an example of how to use `ResponseGenerator` to send a simple JSON response:

```ts
class MyResponseGenerator implements ResponseGenerator {
  reply(response, body, statusCode) {
    response.setHeader('Content-Type', 'application/json');
    if (statusCode) {
      response.end(JSON.stringify({ message: "Hello from the server!", status: statusCode }));
    } else {
      response.end(JSON.stringify({ message: "Hello from the server!" }));
    }
  }
}

// Usage:
const response = /* response object */;
const generator = new MyResponseGenerator();
generator.reply(response, { data: "Some data to send" }, 201); // Send a 201 Created response
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
