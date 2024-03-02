export interface HttpAdapter<TServer = any> {
  /**
   * Retrieves the underlying HTTP server application instance.
   *
   * @returns The HTTP server application instance.
   */
  getInstance<T = any>(): T;

  /**
   * Retrieves the native HTTP server instance.
   *
   * @returns The native HTTP server object.
   */
  getHttpServer(): TServer;

  /**
   * Retrieves the adapter's name (for identification).
   *
   * @returns The adapter's name (e.g., 'Express').
   */
  getName(): string;

  /**
   * Starts the server, enabling it to accept connections.
   *
   * @param port The port number on which to listen.
   * @param hostname (Optional) The hostname to bind the server to.
   * @param callback (Optional) A callback function invoked when the server starts listening.
   * @returns A Promise resolving to an HTTP server instance.
   */
  listen(port: number | string, callback?: () => void): Promise<any>;
  listen(
    port: number | string,
    hostname: string,
    callback?: () => void,
  ): Promise<any>;

  /**
   * Prepares the HTTP server for handling requests.
   */
  initHttpServer(): void;

  /**
   * Signals the server to stop accepting new connections while allowing existing ones to complete.
   *
   * @returns A Promise (if applicable) that resolves when the server is closed.
   */
  close(): Promise<any>;
}
