import { Type } from '@armscye/core';

export type Hook<T = any> = string | symbol | object | Type<T> | Function;
