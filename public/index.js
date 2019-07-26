import state from "./js/State.class.js";
import Betting from "./js/Betting.class.js";
import account from './js/Account.class.js';

import { getTheWinner } from "./utils/utils.js";
import {
  updateAndAnimate,
  cleanUp,
  wheel,
  time,
  winnerSpan,
  select,
  input,
  winAmount,
  winMessage,
  accountAmount,
  updateAccountAmount
} from "./utils/DomManipulations.js";


const onSubmit = () => {
  if (state.data.bet || state.data.rolling) return; 
  state.setData({bet: true, expectedWinner: select.options[select.selectedIndex].text, sumOfBet: input.value});  
  account.setPoints(account.getPoints() - state.data.sumOfBet);
  updateAccountAmount();  
}; 

const onClick = () => {  
  winAmount.innerText = "";
  winMessage.innerText = "";

  let winnerInfo = getTheWinner();
  let { winnerDegrees, winner } = winnerInfo; 
  
  let betting;

  if (state.data.bet) {
    betting = new Betting(state.data.expectedWinner, state.data.sumOfBet);

    let {message, sumOfWinning} = betting.proceedBet(winner);
    state.setData({message, sumOfWinning});
  }

  state.setData({winner, rolling: true});
  
  updateAndAnimate(winnerDegrees, time, winner);

  setTimeout(() => {
    wheel.style.transform = `rotate(${1080 + winnerDegrees}deg)`;
  }, time * 1000 - 50);

  setTimeout(() => {
    cleanUp(winner);
    if (state.data.bet) {
      winAmount.innerText = state.data.sumOfWinning;
      winMessage.innerText = state.data.message;
    }
    state.setData({bet: false, rolling: false});
    updateAccountAmount();
  }, time * 1000);
};

window.onload = () => {
  wheel.style.transform = `rotate(${state.getRotation()}deg)`;
  winnerSpan.innerText = state.getWinner();
  accountAmount.innerText = account.getPoints();

  window.onClick = onClick;
  window.onSubmit = onSubmit;
};
