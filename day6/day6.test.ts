import { describe, expect, it } from "bun:test";
import part1 from "./part1";
import part2 from "./part2";

describe.skip("Day 6 Puzzle part 1", () => {
  it("Test input correct solution", async () => {
    expect(await part1("./day6/part-1-test-input.txt")).toBe(288);
  });

  it("Input correct solution", async () => {
    expect(await part1("./day6/part-1-input.txt")).toBe(0);
  });
});

describe("Day 6 Puzzle part 2", () => {
  it("Example input correct solution", async () => {
    expect(await part2("./day6/part-1-test-input.txt")).toBe(71503);
  });
  it("Input correct solution", async () => {
    expect(await part2("./day6/part-1-input.txt")).toBe(34278221);
  });
});
