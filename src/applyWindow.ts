import { DoubleArray } from "cheminfo-types";

import { ExponentialOptions } from "./shapes/exponential";
import { LorentzToGaussOptions } from "./shapes/lorentzToGauss";

type ShapeOptions = ExponentialOptions | LorentzToGaussOptions;

interface ApplyWindowOptions {
  shape: ShapeOptions;
  /**
   * Start Location for Applying Apodize Window
   */
  start?: number;
  /**
   * number of points at the end of the shape to apply the window function inverted
   * @default 0
   */
  pointsToShift?: number;
}
type FunctionGenerator = (options: any) => (i: number) => number;

/**
 * pure function that applies a window function to the input data.
 */
export function applyWindow(
  data: DoubleArray,
  func: FunctionGenerator,
  options: ApplyWindowOptions
) {
  const { shape: shapeOptions, start = 0, pointsToShift = 0 } = options;

  const dataLength = data.length;

  let length = "length" in shapeOptions ? shapeOptions.length : data.length;
  const generator = func({ ...options, length });

  const result = new Float64Array(data);
  const firstEndPoint = Math.min(start + length, dataLength - pointsToShift);
  for (let i = start, j = 0; i < firstEndPoint; i++) {
    result[i] *= generator(j++);
  }

  for (let i = dataLength - 1, j = 0; i > dataLength - pointsToShift - 1; i--) {
    result[i] *= generator(j++);
  }

  return result;
}