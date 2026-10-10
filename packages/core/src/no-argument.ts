/**
 * Represents a class that can be constructed with no arguments to create
 * instances of `T`.
 */
export interface NoArgument<T = unknown> extends Function {
  new (): T;
}
