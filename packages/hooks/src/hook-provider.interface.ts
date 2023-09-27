import { Type } from '@armscye/core';

export type HookProvider<T = any> =
  | string
  | symbol
  | object
  | Type<T>
  | Function;
