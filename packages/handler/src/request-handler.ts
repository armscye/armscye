/**
 * Handles a server request and produces a response.
 *
 * An HTTP request handler process an HTTP request in order to produce an
 * HTTP response.
 */
export interface RequestHandler<TRequest = any, TResponse = any> {
  /**
   * Handles a request and produces a response.
   *
   * May call other collaborating code to generate the response.
   */
  handle(req: TRequest, res: TResponse, next?: any): any;
}
