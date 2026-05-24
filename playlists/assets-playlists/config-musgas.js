const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const artistName = document.querySelector("#artistName");
const lyrics = document.querySelector("#letra");
const cover = document.querySelector("#capa");
const playPauseButton = document.querySelector("#playPauseButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

import songs from "./songs.js";

const textButtonPlay = "<i class='fa-solid fa-play'></i>";
const textButtonPause = "<i class='fa-solid fa-pause'></i>";

let index;

if (window.location.pathname.includes("playlist-1.html")) {
  index = 0;

} else if (window.location.pathname.includes("playlist-2.html")) {
  index = 15;
}

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseButton.onclick = () => playPause();

const playPause = () => {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = textButtonPause;
  } else {
    player.pause();
    playPauseButton.innerHTML = textButtonPlay;
  }
};

player.ontimeupdate = () => updateTime();

const updateTime = () => {
  const currentMinutes = Math.floor(player.currentTime / 60);
  const currentSeconds = Math.floor(player.currentTime % 60);
  currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

  const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
  const durationMinutes = Math.floor(durationFormatted / 60);
  const durationSeconds = Math.floor(durationFormatted % 60);
  duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

  const progressWidth = durationFormatted
    ? (player.currentTime / durationFormatted) * 100
    : 0;

  progress.style.width = progressWidth + "%";
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

progressBar.onclick = (e) => {
  const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
  player.currentTime = newTime;
};

const loadMusic = () => {
  player.src = songs[index].src;
  musicName.innerHTML = songs[index].name;
  artistName.innerHTML = songs[index].artist;
  lyrics.innerHTML = songs[index].lyrics;
  cover.src = songs[index].cover;
};

let minIndex;
let maxIndex;

if (window.location.pathname.includes("playlist-1.html")) {

  minIndex = 0;
  maxIndex = 14;

} else if (window.location.pathname.includes("playlist-2.html")) {

  minIndex = 15;
  maxIndex = 29;
}

const prevNextMusic = (type = "next") => {

  if (type === "next") {

    index++;

    if (index > maxIndex) {
      index = minIndex;
    }

  } else if (type === "prev") {

    index--;

    if (index < minIndex) {
      index = maxIndex;
    }
  }

  loadMusic();

  player.play();

  playPauseButton.innerHTML = textButtonPause;
};

window.mostrar = (i) => {
  index = i;

  loadMusic();

  player.play();

  playPauseButton.innerHTML = textButtonPause;
};

loadMusic();

player.onended = () => prevNextMusic();