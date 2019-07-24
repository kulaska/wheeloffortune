import state  from './State.class.js';
import { randomizer, updateKeyFrames } from './randomizer.js';


window.onload = () => {
  const wheel = document.querySelector('.wheel');
  const button = document.querySelector('.button button');
  const winnerSpan = document.querySelector('.winner span');

  wheel.style.transform = `rotate(${state.getRotation()}deg)`;
  winnerSpan.innerHTML = state.getWinner(); 


  const onClick = () => {
    // abstract that
    let winnerDegrees = randomizer(360);
    let winner = Math.floor(winnerDegrees / 36);
    winner = winner == 0 ? 10 : winner;
    
    let time = 5;     
    
    updateKeyFrames(winnerDegrees, time);  
    wheel.classList.add('wheel__animated');
    
    state.setData({rotation: winnerDegrees, winner});
    
    button.disabled = true;

    setTimeout(() => {
      wheel.style.transform = `rotate(${1080 + winnerDegrees}deg)`;      
    },
      time * 1000 - 50);

      // clean this up
    setTimeout(() => {
      wheel.classList.remove('wheel__animated');
      button.disabled = false;
      document.styleSheets[0].removeRule(0);
      document.styleSheets[0].removeRule(1);
      winnerSpan.innerText = winner;
      },
      time * 1000);
  };

  window.onClick = onClick;

};