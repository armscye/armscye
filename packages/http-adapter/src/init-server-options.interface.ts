import { TlsOptions } from 'tls';

export interface InitServerOptions {
  /**
   * Set of configurable Transport Layer Security (TLS) options
   */
  tls?: TlsOptions;

  /**
   * Whether server should support graceful shutdown, allowing active requests
   * time to complete.
   */
  graceful?: boolean;

  /**
   * The grace period: number of milliseconds to continue to try to finish
   * outstanding http server I/O before forcibly terminating it.
   *
   * Defaults to Infinity (don't force-close). If you want to immediately
   * destroy all sockets set its value to `0`.
   *
   * See {@link https://www.npmjs.com/package/stoppable | stoppable}
   */
  grace?: number;
}
