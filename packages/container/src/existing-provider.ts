import { ProviderToken } from './provider-token';

/**
 * Configures the `Container` to return a value of another `useExisting` token.
 */
export interface ExistingProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Existing `token` to return.
   */
  useExisting: T;

  /**
   * Whether the created instance should be cached.
   */
  shared?: boolean;
}
