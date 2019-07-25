import state from "./State.class.js";
import { getTheWinner } from "./utils.js";
import {
  updateAndAnimate,
  cleanUp,
  wheel,
  time,
  winnerSpan
} from "./DomManipulations.js";

const onClick = () => {
  let winnerInfo = getTheWinner();
  let { winnerDegrees, winner } = winnerInfo;

  const betting = new Betting(
    select.options[select.selectedIndex].text,
    input.value
  );

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
