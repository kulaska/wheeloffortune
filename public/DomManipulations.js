import updateKeyFrames from './updateKeyFrames.js';
import state from './State.class.js';

const button = document.querySelector('.button button');

export const wheel = document.querySelector('.wheel');
export const winnerSpan = document.querySelector('.winner span');
export const time = 5; 

export const updateAndAnimate = (winnerDegrees, time, winner) => {
  updateKeyFrames(winnerDegrees, time);  
  wheel.classList.add('wheel__animated');    
  state.setData({rotation: winnerDegrees, winner});  
  button.disabled = true;
};

export const cleanUp = (winner) => {
  wheel.classList.remove('wheel__animated');
  button.disabled = false;
  document.styleSheets[0].removeRule(0);
  document.styleSheets[0].removeRule(1);
  winnerSpan.innerText = winner;
};