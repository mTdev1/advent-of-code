import { parseFileToLineArray } from "../shared/utils";

const getValues = (line: string) => {
  const [_, values] = line.split(":");
  const items = values.split(" ").filter(Boolean);
  return items.join("");
};

export default async (path: string) => {
  const [time, distance] = await parseFileToLineArray(path);
  const timeItem = getValues(time);
  const distanceItem = getValues(distance);

  const totalRaceTime = parseInt(timeItem);
  let recordBeats = 0;
  [...Array(totalRaceTime)].forEach((_, buttonHoldTime) => {
    const distanceBasedOnHold =
      (totalRaceTime - buttonHoldTime) * buttonHoldTime;
    if (distanceBasedOnHold > parseInt(distanceItem)) {
      recordBeats++;
    }
  });

  return recordBeats;
};
