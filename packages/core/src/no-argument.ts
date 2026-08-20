/**
 * Represents a constructable class `T` with a no-argument constructor.
 */
export interface NoArgConstructor<T = unknown> extends Function {
  new (): T;
}
