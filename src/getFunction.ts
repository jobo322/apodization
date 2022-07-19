import type { WindowFunctions } from './shapes/WindowFunctions';
import { exponential } from './shapes/exponential';
import { lorentzToGauss } from './shapes/lorentzToGauss';


export function getFunction(options: WindowFunctions) {
  const { kind } = options;
  switch (kind) {
    case 'exponential':
      return exponential(options);
    case 'lorentzToGauss':
      return lorentzToGauss(options);
    default: throw Error(`Unknown distribution ${kind as string}`);
  }
}
