const randomizer = (higherBorder) => {
  let result = Math.floor(Math.random() * higherBorder) + 1;
  if (result % 36 == 0 || result == 0) result = randomizer(higherBorder);
  return result;
};

export const getTheWinner = () => {  
  let winnerDegrees = randomizer(360);
  let winner = Math.floor(winnerDegrees / 36);
  winner = winner == 0 ? 10 : winner;

  return {winnerDegrees, winner};
};

 export const getSumOfWinning = (input) => {
  return input * 10;
 };

