/**
 * Represents a constructable class that creates instances of `T`.
 */
export interface Type<T = unknown> extends Function {
  new (...args: any[]): T;
}
