import { applyWindow } from "./applyWindow";
import { getFunction } from "./getFunction";
import type { WindowFunctions } from "./shapes/WindowFunctions";

interface ShapeToAdd {
  /**
   * Start Location for Applying Apodize Window
   */
  start?: number;
  /**
   * parameters of the shape plus the kind of shape to identify
   */
  shape: WindowFunctions;
}

interface ShapeOptions {
  /**
   * length of the window shape
   */
  length: number;

  /**
   * parameters of the shape plus the kind of shape to identify
   */
  shapes?: ShapeToAdd[];
}

export function compose(shapeOptions: ShapeOptions) {
  const { length: dataLength, shapes = [] } = shapeOptions;
  let data = new Float64Array(dataLength).fill(1);
  shapes.forEach((options) => {
    const { shape, start = 0 } = options;
    const { options: shapeOptions } = shape;
    const length =
      "length" in shapeOptions ? shapeOptions.length : dataLength - start;
    const currentFunc = getFunction(shape);
    applyWindow(data, {
      func: currentFunc,
      length,
      start,
      output: data,
    });
  });
  return data;
}
