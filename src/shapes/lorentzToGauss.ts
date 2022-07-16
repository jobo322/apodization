export interface LorentzToGaussOptions {
  /**
   * size of the shape function
   */
   length: number;
  /**
   * increment value in time or the independent value
   */
  dw: number;
  /**
   * Gaussian Broaden Width, Hz
   * @default 0
   */
  gaussHz?: number
  /**
   * Inverse Exponential Width, Hz
   * @default 0
   */
  expHz?: number
  /**
   * Location of Gauss Maximum, this value should be between 0 to 1
   * @default 0
   */
  center?: number
}

export function lorentzToGauss(options: LorentzToGaussOptions) {
  
  const { dw, length, gaussHz = 0, expHz = 0, center = 0 } = options;

  if (center > 1 || center < 0) {
    throw new Error('The center of gaussian shape should be inside of the window function: 0 - 1');
  }

  const C5 = Math.pow(0.6 * Math.PI * gaussHz * dw, 2);
  const C2 = center * (length - 1);
  const C6 = Math.PI * dw * expHz;

  return (i: number) => Math.exp(i * C6 - Math.pow(C2 - i, 2) * C5);
}
