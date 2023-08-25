import { Type } from '@armscye/core';

export type Hook = Type<any> | InstanceType<any> | Function | string | Symbol;
