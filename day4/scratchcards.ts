import { onesArrayOfLength, parseFileToLineArray } from "../shared/utils";

const countPointsInCard = (card: string) => {
  const cardMiddle = card.indexOf("|");
  const cardNumbers = card
    .slice(card.indexOf(":") + 1, cardMiddle)
    .trim()
    .split(" ");
  const playerNumbers = card
    .slice(cardMiddle + 2)
    .split(" ")
    .filter(Boolean);

  return cardNumbers.reduce((points, number) => {
    return playerNumbers.includes(number) ? (points ? points * 2 : 1) : points;
  }, 0);
};

const countWinsInCard = (card: string) => {
  const cardMiddle = card.indexOf("|");
  const cardNumbers = card
    .slice(card.indexOf(":") + 1, cardMiddle)
    .trim()
    .split(" ");
  const playerNumbers = card
    .slice(cardMiddle + 2)
    .split(" ")
    .filter(Boolean);

  return cardNumbers.reduce((points, number) => {
    const winPoints = playerNumbers.includes(number) ? 1 : 0;
    return points + winPoints;
  }, 0);
};

export const part1 = async (path: string) => {
  const array = await parseFileToLineArray(path);

  const sumOfPoints = array.reduce((sum, card) => {
    const points = countPointsInCard(card);
    return sum + points;
  }, 0);

  return sumOfPoints;
};

export const part2 = async (path: string) => {
  const array = await parseFileToLineArray(path);

  const arrayOfInstances = array.reduce((sum, card, idx) => {
    const wins = countWinsInCard(card);
    [...Array(sum[idx])].forEach(() => {
      [...Array(wins)].forEach((_, indexOfWin) => {
        sum[idx + indexOfWin + 1] += 1;
      });
    });
    return sum;
  }, onesArrayOfLength(array.length));

  const sumOfInstances = arrayOfInstances.reduce(
    (sum, instances) => sum + instances,
    0
  );

  return sumOfInstances;
};
