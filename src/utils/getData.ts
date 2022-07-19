import { FunctionGenerator } from "../applyWindow";

export function getData(generator: FunctionGenerator, options: any = {}) {
  const { length } = options;
  const func = generator(options);
  const data = new Float64Array(length);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < length; i++) {
    const value = func(i);
    data[i] = value;
    if (value > max) max = value;
  }

  for (let i = 0; i < length; i++) data[i] /= max;
  return data;
}
