export function getData(func: (i: number) => number, length: any) {
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
