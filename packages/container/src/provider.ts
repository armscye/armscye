import { ClassProvider } from './class-provider';
import { ExistingProvider } from './existing-provider';
import { FactoryProvider } from './factory-provider';
import { ValueProvider } from './value-provider';

export type Provider =
  | ValueProvider
  | ClassProvider
  | FactoryProvider
  | ExistingProvider;
