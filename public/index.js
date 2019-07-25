import state from './State.class.js';
import { updateKeyFrames, getTheWinner } from './utils.js';

const wheel = document.querySelector('.wheel');
const button = document.querySelector('.button button');
const winnerSpan = document.querySelector('.winner span');
const time = 5; 

const updateAndAnimate = (winnerDegrees, time, winner) => {
  updateKeyFrames(winnerDegrees, time);  
  wheel.classList.add('wheel__animated');    
  state.setData({rotation: winnerDegrees, winner});  
  button.disabled = true;
};

const cleanUp = (winner) => {
  wheel.classList.remove('wheel__animated');
  button.disabled = false;
  document.styleSheets[0].removeRule(0);
  document.styleSheets[0].removeRule(1);
  winnerSpan.innerText = winner;
};

const onClick = () => { 
  let winnerInfo = getTheWinner();   
  let { winnerDegrees, winner } = winnerInfo;     
  
  updateAndAnimate(winnerDegrees, time, winner);

  setTimeout(() => {
    wheel.style.transform = `rotate(${1080 + winnerDegrees}deg)`;      
  }, time * 1000 - 50);
  
  setTimeout(() => {
    cleanUp(winner);
  }, time * 1000);
};

window.onload = () => {
  wheel.style.transform = `rotate(${state.getRotation()}deg)`;
  winnerSpan.innerHTML = state.getWinner(); 
  
  window.onClick = onClick;
};