import { parseFileToLineArray } from "../shared/utils";

const getGameIndex = (game: string) => {
  const sliceEnd = game.indexOf(":");
  const index = game.slice(4, sliceEnd);

  return parseInt(index);
};

enum COLORS {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

const LIMITS = {
  [COLORS.RED]: 12,
  [COLORS.GREEN]: 13,
  [COLORS.BLUE]: 14,
};

const findItemAmountInRound = (round: string) => {
  const returnValue = {
    [COLORS.BLUE]: 0,
    [COLORS.GREEN]: 0,
    [COLORS.RED]: 0,
  };

  const pickedColors = round.split(",");
  pickedColors.forEach((pick) => {
    Object.values(COLORS).forEach((color) => {
      const colorIndexInRound = pick.indexOf(color);
      if (colorIndexInRound === -1) return;
      const numberOfItems = parseInt(pick.slice(0, colorIndexInRound));
      Object.assign(returnValue, {
        ...returnValue,
        [color]: returnValue[color] + numberOfItems,
      });
    });
  });

  return returnValue;
};

const gameSatisfiesElf = (game: string) => {
  const sliceStart = game.indexOf(":");
  const gameRounds = game.slice(sliceStart + 1).split(";");
  const { red, green, blue } = gameRounds.reduce(
    (cubes, round) => {
      const itemAmount = findItemAmountInRound(round);
      return {
        red: cubes.red > itemAmount.red ? cubes.red : itemAmount.red,
        green: cubes.green > itemAmount.green ? cubes.green : itemAmount.green,
        blue: cubes.blue > itemAmount.blue ? cubes.blue : itemAmount.blue,
      };
    },
    {
      red: 0,
      green: 0,
      blue: 0,
    }
  );

  const valid =
    blue <= LIMITS[COLORS.BLUE] &&
    green <= LIMITS[COLORS.GREEN] &&
    red <= LIMITS[COLORS.RED];

  return valid;
};

const getLeastCubesPerGame = (game: string) => {
  const sliceStart = game.indexOf(":");
  const gameRounds = game.slice(sliceStart + 1).split(";");
  return gameRounds.reduce(
    (cubes, round) => {
      const itemAmount = findItemAmountInRound(round);
      return {
        red: cubes.red < itemAmount.red ? itemAmount.red : cubes.red,
        green: cubes.green < itemAmount.green ? itemAmount.green : cubes.green,
        blue: cubes.blue < itemAmount.blue ? itemAmount.blue : cubes.blue,
      };
    },
    {
      red: 0,
      green: 0,
      blue: 0,
    }
  );
};

export const part1 = async (path: string) => {
  const array = await parseFileToLineArray(path);

  const sumOfIds = array.reduce((prev, game) => {
    const gameIndex = getGameIndex(game);
    return gameSatisfiesElf(game) ? prev + gameIndex : prev;
  }, 0);

  console.log(sumOfIds);
  return sumOfIds;
};

export const part2 = async (path: string) => {
  const array = await parseFileToLineArray(path);

  const powerOfLeastCubes = array.reduce((prev, game) => {
    const { green, red, blue } = getLeastCubesPerGame(game);
    return prev + green * red * blue;
  }, 0);

  return powerOfLeastCubes;
};
