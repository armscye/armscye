import { TlsOptions } from 'tls';

export interface InitServerOptions {
  /**
   * Set of configurable Transport Layer Security (TLS) options
   */
  tls?: TlsOptions;

  /**
   * The grace period: number of milliseconds to continue to try to finish
   * outstanding http server I/O before forcibly terminating it.
   */
  grace?: number;
}
