import store from './State.class.js';

let rotate = store.rotation;

let keyframes, animation;

export function updateKeyFrames(newRotation, newTime) {
  keyframes = `@keyframes roll { 0% 
      { transform: rotateZ(${rotate}deg); }
      100% { 
      transform: rotateZ(${1080 + newRotation}deg);
      }
      }
    `;
    document.styleSheets[0].insertRule(keyframes, 0);
  animation = `.wheel__animated {
            animation-name: roll;
            animation-duration: ${newTime}s;  
            animation-timing-function: ease-in-out;
          }
    `;         
  
  document.styleSheets[0].insertRule(animation, 1);
  rotate = newRotation;
}

export const randomizer = (higherBorder) => {
    let result = Math.floor(Math.random() * higherBorder) + 1;
    if (result % 36 == 0 || result == 0) result = randomizer(higherBorder);
    return result;
};

// export function getSumOfWinning

