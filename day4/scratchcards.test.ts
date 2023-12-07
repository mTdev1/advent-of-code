import { describe, expect, it } from "bun:test";
import { part1, part2 } from "./scratchcards";

describe("Day 4 Puzzle part 1", () => {
  it("Test input correct solution", async () => {
    expect(await part1("./day4/part-1-test-input.txt")).toBe(13);
  });

  it("Input correct solution", async () => {
    expect(await part1("./day4/part-1-input.txt")).toBe(20407);
  });
});

describe("Day 4 Puzzle part 2", () => {
  it("Example input correct solution", async () => {
    expect(await part2("./day4/part-1-test-input.txt")).toBe(30);
  });

  it("Input correct solution", async () => {
    expect(await part2("./day4/part-1-input.txt")).toBe(23806951);
  });
});
