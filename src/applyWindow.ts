import { DoubleArray } from "cheminfo-types";

import { getData } from "./utils/getData";

export interface ApplyWindowOptions {
  /**
   * Function that returns the value of the window function per index
   */
  func: (i: number) => number;
  /**
   * Start Location for Applying Apodize Window
   */
  start?: number;
  /**
   * length of the window function
   */
  length?: number;
  /**
   * number of points at the end of the shape to apply the window function inverted
   * @default 0
   */
  pointsToShift?: number;
  /**
   * output array
   */
  output?: DoubleArray;
}

/**
 * pure function that applies a window function to the input data.
 */
export function applyWindow(data: DoubleArray, options: ApplyWindowOptions) {
  const dataLength = data.length;

  const {
    func,
    start = 0,
    length = dataLength,
    pointsToShift = 0,
    output = new Float64Array(data),
  } = options;

  const windowData = getData(func, length);

  const firstEndPoint = Math.min(start + length, dataLength - pointsToShift);
  for (let i = start, j = 0; i < firstEndPoint; i++) {
    output[i] *= windowData[j++];
  }

  for (let i = dataLength - 1, j = 0; i > dataLength - pointsToShift - 1; i--) {
    output[i] *= windowData[j++];
  }

  return output;
}
