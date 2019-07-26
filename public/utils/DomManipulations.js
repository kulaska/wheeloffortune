import updateKeyFrames from "./updateKeyFrames.js";
import state from "../js/State.class.js";
import account from '../js/Account.class.js';

const button = document.querySelector(".button button");

export const wheel = document.querySelector(".wheel");
export const winnerSpan = document.querySelector(".winner span");
export const time = 5;
export const input = document.querySelector(".betting-block .input");
export const submit = document.querySelector(".betting-block button");
export const select = document.querySelector(".betting-block .select");
export const winAmount = document.querySelector(".winner .win-amount");
export const winMessage = document.querySelector(".winner .message");
export const accountAmount = document.querySelector('.account .account__amount');

export const updateAndAnimate = (winnerDegrees, time, winner) => {
  updateKeyFrames(winnerDegrees, time);
  wheel.classList.add("wheel__animated");
  state.setData({ rotation: winnerDegrees, winner });  

  button.disabled = true;
  submit.disabled = true;
};

export const updateAccountAmount = () => {
  console.log(account.getPoints())
  accountAmount.innerText = account.getPoints();
};

export const cleanUp = winner => {
  wheel.classList.remove("wheel__animated");
  button.disabled = false;
  submit.disabled = false;
  document.styleSheets[0].removeRule(0);
  document.styleSheets[0].removeRule(1);  
  winnerSpan.innerText = winner;
};
