import { DoubleArray } from "cheminfo-types";

import { getData } from "./utils/getData";

interface GenericShapeOptions {
  length?: number,
  dw?: number,
}

export interface ApplyWindowOptions<T> {
  /**
   * acepts parameters a returns a function that returns the value of the window 
   * function per index
   */
  func: (shape: T) => (i: number) => number;
  /**
   * options for func function
   */
  shape: T;
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

/**
 * pure function that applies a window function to the input data.
 */
export function applyWindow(
  data: DoubleArray,
  options: ApplyWindowOptions<GenericShapeOptions>
) {
  const { func, shape: shapeOptions, start = 0, pointsToShift = 0 } = options;

  const dataLength = data.length;

  const { length = dataLength } = shapeOptions;
  const windowData = getData(func({ ...options, length }), length);

  const result = new Float64Array(data);
  const firstEndPoint = Math.min(start + length, dataLength - pointsToShift);
  for (let i = start, j = 0; i < firstEndPoint; i++) {
    result[i] *= windowData[j++];
  }

  for (let i = dataLength - 1, j = 0; i > dataLength - pointsToShift - 1; i--) {
    result[i] *= windowData[j++];
  }

  return result;
}
