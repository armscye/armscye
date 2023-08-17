import { InitServerOptions } from './init-server-options.interface';

export interface HttpAdapter {
  /**
   * Get the http server application instance.
   * @returns the http Server application instance
   */
  getInstance(): any;

  /**
   * Returns the underlying http server.
   * @returns the underlying http server
   */
  getHttpServer(): any;

  /**
   * Get the name given to the http adapter.
   * @returns the name given to the http adapter
   */
  getType(): string;

  /**
   * Start a server listening for connections.
   *
   * @param port the port to listen on
   * @param hostname a literal IP address or host name that can be resolved
   * to an IP address
   * @param callback optional callback
   * @returns an `http.server` or `https.server` object as Promise
   */
  listen(port: number | string, callback?: () => void): any;
  listen(port: number | string, hostname: string, callback?: () => void): any;

  /**
   * Initialize the http server.
   * @param options the options to apply
   */
  initHttpServer(options: InitServerOptions): void;

  /**
   * Stops the server from accepting new connections and keeps existing
   * connections.
   */
  close(): any;

  /**
   * Initialize the http adapter.
   */
  init?(): Promise<void>;
}
