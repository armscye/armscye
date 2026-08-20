/**
 * Represents an instantiable class `T` with a default (no-argument) constructor.
 */
export interface NoArgument<T = any> extends Function {
  new (): T;
}
