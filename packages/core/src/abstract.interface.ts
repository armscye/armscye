/**
 * Represents an abstract class `T`, if applied to a concrete class it would stop being
 * instantiable.
 */
export interface Abstract<T = any> extends Function {
  prototype: T;
}
