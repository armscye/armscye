/**
 * Represents an abstract class constructor that creates instances of `T`.
 */
export interface Abstract<T = unknown> extends Function {
  prototype: T;
}
