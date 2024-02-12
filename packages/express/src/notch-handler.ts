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
