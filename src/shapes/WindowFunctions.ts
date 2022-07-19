import type { ExponentialOptions } from "./exponential";
import type { LorentzToGaussOptions } from "./lorentzToGauss";

interface Exponential extends ExponentialOptions {
  kind: "exponential";
}

interface LorentToGauss extends LorentzToGaussOptions {
  kind: "lorentzToGauss";
}

export type WindowFunctions = Exponential | LorentToGauss;
