const video = document.getElementById('video');
const pauseBtn = document.getElementById('pause-btn');

video.addEventListener('pause', () => {
  video.classList.add('blur');
});

video.addEventListener('play', () => {
  video.classList.remove('blur');
});

pauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    pauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    pauseBtn.textContent = 'Play';
  }
});