const video = document.querySelector('.video-container video');

video.addEventListener('mouseenter', playVideo);
video.addEventListener('mouseleave', pauseVideo);

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}
