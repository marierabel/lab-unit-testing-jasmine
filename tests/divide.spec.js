// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the sum of the two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(8, 4)).toEqual(2);
      expect(divide(100, 25)).toEqual(4);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
    it("should return undifined if one of the arguments is not a number", () => {
      expect(divide("a", 2)).toBe(undefined);
      expect(divide(1, true)).toBe(undefined);
      expect(divide("bou", "1")).toBe(undefined);
    });
  });
});
