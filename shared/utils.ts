import { file } from "bun";

export const parseFileToLineArray = async (
  filePath: string,
  limit?: number
) => {
  const f = file(filePath);
  const content = await f.text();
  const arr = content.split("\n");
  return limit ? arr.splice(0, limit) : arr;
};

export const onesArrayOfLength = (length: number) => {
  return [...Array(length)].map(() => 1);
};
