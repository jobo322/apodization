import { lorentzToGauss } from "../lorentzToGauss";

describe("test myModule", () => {
  it("should return 42", () => {
    const gm = lorentzToGauss({
      dw: 0.01,
      gaussianHz: 0.2,
      exponentialHz: 0,
      center: 0.5,
      length: 500,
    });
    const value = gm(250);
    expect(value).toBeCloseTo(1, 0.1);
  });
});
