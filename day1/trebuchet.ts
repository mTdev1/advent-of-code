import { parseFileToLineArray } from "../shared/utils";

export const part1 = async (limit?: number) => {
  const array = await parseFileToLineArray("./day1/part-1-input.txt", limit);

  let result = 0;
  array.forEach((line) => {
    let numbers = "";

    numbers = line.replace(/[a-z]/g, "");

    if (numbers.length === 1) {
      const num = parseInt(numbers);
      result += num * 10 + num;
    }
    if (numbers.length > 1) {
      const [first] = numbers;
      const last = numbers.at(-1) ?? "0";
      result += parseInt(first) * 10 + parseInt(last);
    }
  });
  return result;
};

const VALUE_TABLE = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const searchFor = Object.keys(VALUE_TABLE);

const findFirst = (line: string) => {
  let first = { index: Infinity, value: "" };
  searchFor.forEach((searchParam) => {
    const index = line.indexOf(searchParam);
    if (index === -1) return;
    if (index < first.index) {
      first = { index, value: searchParam };
    }
  });

  return VALUE_TABLE[first.value as keyof typeof VALUE_TABLE];
};

const findSecond = (line: string) => {
  let last = { index: -1, value: "" };
  searchFor.forEach((searchParam) => {
    const index = line.lastIndexOf(searchParam);
    if (index === -1) return;
    if (index > last.index) {
      last = { index, value: searchParam };
    }
  });

  return VALUE_TABLE[last.value as keyof typeof VALUE_TABLE];
};

export const part2 = async (inputPath: string) => {
  const array = await parseFileToLineArray(inputPath);

  let number = 0;

  array.forEach((line) => {
    const first = findFirst(line);
    const second = findSecond(line);

    number += first * 10 + second;
  });

  return number;
};
