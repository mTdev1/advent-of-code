import { describe, expect, it } from "bun:test";
import { part1, part2 } from "./trebuchet";

describe("Puzzle part 1", () => {
  it("Test input by first three lines correct solution", async () => {
    expect(await part1(3)).toBe(124);
  });

  it("Test input by first five lines correct solution", async () => {
    expect(await part1(5)).toBe(311);
  });

  it("Input correct solution", async () => {
    expect(await part1()).toBe(54951);
  });
});

describe("Puzzle part 2", () => {
  it("Example input correct solution", async () => {
    expect(await part2("./day1/part-2-test-input.txt")).toBe(281);
  });

  it("Input correct solution", async () => {
    expect(await part2("./day1/part-1-input.txt")).toBe(55218);
  });
});
