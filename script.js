const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const timestamp = document.getElementById('timestamp');
// Song titles
const songs = [
'001','002','003','004','005','006',
'007','008','009','010','011','012',
'013','014','015','016','017','018',
'019','020','021','022','023','024',
'025','026','027','028','029','030',
'031','032','033','034','035','036',
'037','038','039','040','041','042',
'043','044','045','046','047','048',
'049','050','051','052','053','054',
'055','056','057','058','059','060',
'061','062','063','064','065','066',
'067','068','069','070','071','072',
'073','074','075','076','077','078',
'079','080','081','082','083','084',
'085','086','087','088','089','090',
'091','092','093','094','095','096',
'097','098','099','100','101','102',
'103','104','105','106','107','108',
'109','110','111','112','113','114'];

// Keep track of song
let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song){
  title.innerText=song;
  audio.src=`music/${song}.mp3`;
  cover.src=`images/img.jpg`
}

//play song
 function playSong(){
   musicContainer.classList.add("play");
   playBtn.querySelector('i.fas').classList.replace('fa-play','fa-pause')
   audio.play();
 }
 //pause song
 function pauseSong(){
  musicContainer.classList.remove("play");
  playBtn.querySelector('i.fas').classList.replace('fa-pause','fa-play')
  audio.pause();
}

//play btn
playBtn.addEventListener('click', ()=>{
const isPlaying=musicContainer.classList.contains('play');
if(isPlaying){
  pauseSong();
}else{
  playSong();
}
})

//prev song
function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
//next song 
function nextSong(){
  songIndex++;
  if(songIndex > songs.length - 1){
    songIndex=0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//update Progress
function updateProgress(e){
const {duration,currentTime}=e.srcElement;
const progressPercent = (currentTime/duration) * 100;
progress.style.width=`${progressPercent}%`;
}
//set progress

function setProgress(e){
  const width = this.clientWidth;
  const clickX= e.offsetX;
  const duration= audio.duration;

  audio.currentTime=(clickX/width)*duration;
}
// Update progress & timestamp
function updateProgress1() {
  progress.value = (audio.currentTime / audio.duration) * 100;

  // Get minutes
  let mins = Math.floor(audio.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(audio.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
progressContainer.addEventListener('click',setProgress)


//time update event
audio.addEventListener('timeupdate',updateProgress)

//song end 

audio.addEventListener('ended',nextSong)

audio.addEventListener('timeupdate', updateProgress1);






/* // Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/img.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
 */