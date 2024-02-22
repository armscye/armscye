import { ProviderToken } from './provider-token';

/**
 * Configures the `Container` to return a value for a token.
 */
export interface ValueProvider {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * The value to inject.
   */
  useValue: any;
}
