import { Type } from '@armscye/core';

export type Hook<T = any> =
  | Type<T>
  | InstanceType<Type<T>>
  | Function
  | string
  | Symbol;
