# @armscye/response

> A collection of shared standard TypeScript definitions (@response).

## Installation

Using npm:

```sh
npm install --save-dev @armscye/response
```

or using yarn:

```sh
yarn add @armscye/response --dev
```

## Reference

### ResponseGenerator `Interface`

Describes the interface for composing and sending HTTP responses.

```ts
interface ResponseGenerator {
  reply(response: any, body: any, statusCode?: number): any;
}
```

The `reply` method within the `ResponseGenerator` is responsible for the final step in crafting and delivering an HTTP response to the client. The method takes three arguments:

- `response`: An object representing the in-flight response.
- `body`: The actual content of the response, which can be:
  - A string representing text or HTML.
  - An object that will be serialized to JSON (e.g., for sending data).
  - Any other supported data type.
- `statusCode` (optional): A numeric HTTP status code (e.g., 200 for success, 404 for not found). If not provided, a default status code might be used.

**Usage notes**

Here's an example of how to use `ResponseGenerator` to send a simple JSON response:

```ts
class MyResponseGenerator implements ResponseGenerator {
  reply(response, body, statusCode) {
    response.setHeader('Content-Type', 'application/json');
    if (statusCode) {
      response.end(
        JSON.stringify({
          message: 'Hello from the server!',
          status: statusCode,
        }),
      );
    } else {
      response.end(JSON.stringify({ message: 'Hello from the server!' }));
    }
  }
}
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
