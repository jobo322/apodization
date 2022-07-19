import type { ExponentialOptions } from "./exponential";
import type { LorentzToGaussOptions } from "./lorentzToGauss";

interface Exponential {
  kind: "exponential";
  options: ExponentialOptions;
}

interface LorentToGauss {
  kind: "lorentzToGauss";
  options: LorentzToGaussOptions;
}

export type WindowFunctions = Exponential | LorentToGauss;
