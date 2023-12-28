import { expect, it } from "vitest";

export function multiply(a: number, b: number): number {
  return a * b;
}

it("should multiply 1, 2", () => {
  expect(multiply(1, 2)).toBe(2);
});
