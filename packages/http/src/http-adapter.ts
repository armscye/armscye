export interface HttpAdapter {
  /**
   * Retrieves the underlying HTTP server application instance.
   */
  getInstance(): any;

  /**
   * Retrieves the native HTTP server instance.
   */
  getHttpServer(): any;

  /**
   * Retrieves the adapter's name (for identification).
   */
  getName(): string;

  /**
   * Starts the server, enabling it to accept connections.
   *
   * @param port The port number on which to listen.
   * @param hostname (Optional) The hostname to bind the server to.
   * @param callback (Optional) A callback function invoked when the server starts listening.
   */
  listen(port: number | string, callback?: () => void): any;
  listen(port: number | string, hostname: string, callback?: () => void): any;

  /**
   * Prepares the HTTP server for handling requests.
   */
  initHttpServer(): void;

  /**
   * Signals the server to stop accepting new connections while allowing existing ones to complete.
   */
  close(): any;
}
