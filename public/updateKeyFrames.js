import store from './State.class.js';

let rotate = store.rotation;

let keyframes, animation;


export default function updateKeyFrames(newRotation, newTime) {
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