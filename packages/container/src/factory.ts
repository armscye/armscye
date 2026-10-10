import { Container } from './container';

/**
 * A function that creates a value. It is invoked with the container, from
 * which it can resolve the dependencies it requires.
 */
export type Factory<T = any> = (container: Container) => T;
