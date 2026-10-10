import { ProviderToken } from './provider-token';

/**
 * Describes a container that exposes methods to read its entries.
 */
export interface Container {
  /**
   * Retrieves an entry from the container by its provider token.
   * The type parameter `T` is asserted by the caller; the container does not
   * verify that the entry matches it.
   *
   * @param token the provider token of the entry to look for
   * @returns the entry associated with the token
   * @throws Error if no entry was found for the token
   * @throws Error if an error occurs while retrieving the entry
   */
  get<T>(token: ProviderToken): T;

  /**
   * Checks whether an entry exists for the given provider token.
   *
   * @param token the provider token of the entry to look for
   * @returns `true` if an entry exists for the token, `false` otherwise
   */
  has(token: ProviderToken): boolean;
}
