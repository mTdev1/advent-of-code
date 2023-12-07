import { describe, expect, it } from "bun:test";
import { part1, part2 } from "./cubeConundrum";

describe.skip("Day 2 Puzzle part 1", () => {
  it("Test input correct solution", async () => {
    expect(await part1("./day2/part-1-test-input.txt")).toBe(8);
  });

  it("Input correct solution", async () => {
    expect(await part1("./day2/part-1-input.txt")).toBe(2278);
  });
});

describe.skip("Day 2 Puzzle part 2", () => {
  it("Example input correct solution", async () => {
    expect(await part2("./day2/part-1-test-input.txt")).toBe(2286);
  });

  it("Input correct solution", async () => {
    expect(await part2("./day2/part-1-input.txt")).toBe(67953);
  });
});
