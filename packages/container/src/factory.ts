import { Container } from './container';

/**
 * A function that creates an object. It is invoked with the container, from
 * which it can resolve the dependencies it requires.
 */
export type Factory<T = any> = (container: Container) => T;
