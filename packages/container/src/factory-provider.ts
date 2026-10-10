import { Factory } from './factory';
import { Lifetime } from './lifetime';
import { ProviderToken } from './provider-token';

/**
 * Configures the `Container` to return a value by invoking a `useFactory` function.
 */
export interface FactoryProvider {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * A function to invoke to create a value for the token. The function is
   * invoked with the container, from which it can resolve its dependencies.
   */
  useFactory: Factory<any>;

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
