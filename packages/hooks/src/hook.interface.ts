import { Type } from '@armscye/core';
import { StartupHook } from './startup-hook.interface';
import { ShutdownHook } from './shutdown-hook.interface';

export type Hook =
  | Type<StartupHook | ShutdownHook>
  | Function
  | string
  | Symbol;
