import { expect, it } from "vitest";

export function sum(a: number, b: number): number {
  return a + b;
}

it("should add 1, 2", () => {
  expect(sum(1, 2)).toBe(3);
});
