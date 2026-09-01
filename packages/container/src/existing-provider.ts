import { Lifetime } from './lifetime';
import { ProviderToken } from './provider-token';

/**
 * Configures the `Container` to return a value of another `useExisting` token.
 */
export interface ExistingProvider {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Existing `token` to return.
   */
  useExisting: ProviderToken;

  /**
   * @deprecated Use `lifetime` instead. Whether the created instance should be cached.
   */
  shared?: boolean;

  /**
   * The lifetime of the created instance.
   */
  lifetime?: Lifetime;
}
