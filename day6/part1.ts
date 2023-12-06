import { parseFileToLineArray } from "../shared/utils";

const getValues = (line: string) => {
  const [_, values] = line.split(":");
  const items = values.split(" ").filter(Boolean);
  return items;
};

export default async (path: string) => {
  const [time, distance] = await parseFileToLineArray(path);
  const timeItems = getValues(time);
  const distanceItems = getValues(distance);

  const ans = timeItems.reduce((total, totalRaceTimeStr, raceIndex) => {
    const totalRaceTime = parseInt(totalRaceTimeStr);
    let recordBeats = 0;
    [...Array(totalRaceTime)].forEach((_, buttonHoldTime) => {
      const distanceBasedOnHold =
        (totalRaceTime - buttonHoldTime) * buttonHoldTime;
      if (distanceBasedOnHold > parseInt(distanceItems[raceIndex])) {
        recordBeats++;
      }
    });
    return total * recordBeats;
  }, 1);

  return ans;
};
