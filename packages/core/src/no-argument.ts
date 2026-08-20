/**
 * Represents a constructable class `T` with a no-argument constructor.
 */
export interface NoArgument<T = unknown> extends Function {
  new (): T;
}
