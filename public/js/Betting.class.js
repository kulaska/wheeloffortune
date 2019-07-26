import account from './Account.class.js';

export default class Betting {
  constructor(number, sum) {
    this.numberThatUserExpects = number;
    this.sumOfBet = sum;
  }

  proceedBet(actualWinner) {    
    if (actualWinner == this.numberThatUserExpects) {
      let sum = this.getSumOfWinning();
      account.setPoints(account.getPoints() + sum);      
      return {
        message: "Congratulations, you won!",
        sumOfWinning: sum
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
