export interface ExponentialOptions {
  /**
   * line broadening value in Hz, a negative value will invert the shape
   */
  lb: number;
  /**
   * increment value in time or the independent value
   */
  dw: number;
}

export function exponential(options: ExponentialOptions) {
  const { lb, dw } = options;
  const coefExp = -lb * Math.PI * dw;
  return (i: number) => Math.exp(coefExp * i);
}
