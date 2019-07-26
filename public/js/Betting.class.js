export default class Betting {
  constructor(number, sum) {
    this.numberThatUserExpects = number;
    this.sumOfBet = sum;
  }

  proceedBet(actualWinner) {
    console.log(this.numberThatUserExpects);    
    if (actualWinner == this.numberThatUserExpects) {      
      return {
        message: "Congratulations, you won!",
        sumOfWinning: this.getSumOfWinning()
      };
    } else
      return {
        message: "Sorry, you've lost this one. Try once more!",
        sumOfWinning: 0
      };
  }

  getSumOfWinning() {
    return this.sumOfBet * 10;
  }
}
