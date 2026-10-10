/**
 * Represents a class, possibly abstract, whose instances are of type `T`.
 * It cannot necessarily be constructed with `new`.
 */
export interface Abstract<T = unknown> extends Function {
  prototype: T;
}
