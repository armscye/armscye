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
   * Class to instantiate for the `token`.
   */
  useClass: NoArgument<any>;

  /**
    /**
     * @deprecated Use `lifetime` instead. Whether the created instance should be cached.
     */
  shared?: boolean;

  /**
   * The lifetime of the created instance.
   */
  lifetime?: Lifetime;
}
