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
   * Token of the existing entry to return.
   */
  useExisting: ProviderToken;

  /**
   * Whether the created instance should be cached.
   *
   * @deprecated Use `lifetime` instead.
   */
  shared?: boolean;

  /**
   * The lifetime of the created instance. Takes precedence over `shared`
   * when both are set.
   */
  lifetime?: Lifetime;
}
