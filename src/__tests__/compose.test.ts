import { compose } from "../compose";

describe("simple test compose", () => {
  it("single exponential function", () => {
    const data = compose({
      length: 10,
      shapes: [
        {
          start: 0,
          shape: {
            kind: "exponential",
            options: {
              lb: 1,
              dw: 0.1,
            },
          },
        },
      ],
    });
    expect(data[0]).toBe(1);
  });

  it("exponential n lorentzToGauss composed", () => {
    const data = compose({
      length: 10,
      shapes: [
        {
          start: 0,
          shape: {
            kind: "exponential",
            options: {
              lb: 1,
              dw: 0.1,
            },
          },
        },
        {
          start: 0,
          shape: {
            kind: "exponential",
            options: {
              lb: -1,
              dw: 0.1,
            },
          },
        },
      ],
    });
    expect(data[0]).toBeCloseTo(0.059164511294077, 4);
  });
});
