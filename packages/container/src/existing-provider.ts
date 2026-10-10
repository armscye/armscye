import { Lifetime } from './lifetime';
import { ProviderToken } from './provider-token';

/**
 * Configures the `Container` to return a value of another `useExisting` token.
 * An alias creates no instance; the lifetime of the resolved value is
 * determined by the `useExisting` target.
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
   * Whether the resolved value should be cached.
   *
   * @deprecated An alias creates no instance; the lifetime of the resolved
   * value is determined by the `useExisting` target.
   */
  shared?: boolean;

  /**
   * The lifetime of the resolved value.
   *
   * @deprecated An alias creates no instance; the lifetime of the resolved
   * value is determined by the `useExisting` target.
   */
  lifetime?: Lifetime;
}
