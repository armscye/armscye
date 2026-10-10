import { NoArgument } from '@armscye/core';
import { ProviderToken } from './provider-token';
import { Lifetime } from './lifetime';

/**
 * Configures the `Container` to return an instance of `useClass` for a token.
 */
export interface ClassProvider {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Class to instantiate for the token.
   */
  useClass: NoArgument<any>;

  /**
   * Whether the created instance should be cached.
   *
   * @deprecated Use `lifetime` instead: `true` is equivalent to `'singleton'`
   * and `false` to `'transient'`.
   */
  shared?: boolean;

  /**
   * The lifetime of the created instance. Takes precedence over `shared`
   * when both are set. When neither is set, the container's default applies.
   */
  lifetime?: Lifetime;
}
