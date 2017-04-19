(function () {
  'use strict';

  window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log('event', key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  });
}());
