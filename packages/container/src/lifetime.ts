/**
 * Determines whether a dependency instance is reused across resolutions or
 * a new instance is created for each resolution.
 */
export type Lifetime = 'singleton' | 'transient';
