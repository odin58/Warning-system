let video;
let className = "waiting...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/0f2f4TXu/';
let mySound;
let maxPermittedSpeed = 60;
let opText = "";
let timer;
let boolAudioPlaying = false;
function preload() {
  soundFormats('mp3');
  // mySound = loadSound('https://www.mboxdrive.com/alarm.mp3');
  mySound = loadSound('../static/WarningSystem/assets/alarm.mp3');

}
function setup() {
  mySound.setVolume(1);
}


function draw() {

  background(0);
}

function eventSpeed(speed) {
  if (speed > maxPermittedSpeed) {
    if (!mySound.isPlaying()) {
      mySound.play();
      print("Playing audio");
      text2speech();
      boolAudioPlaying = true;  
    }
  }
  else {
    if (boolAudioPlaying) {
      mySound.stop();
      boolAudioPlaying = false;
      responsiveVoice.cancel();
      clearInterval(timer);
      print("Stopped " + speed);
    }
  }
}
function text2speech() { 
    print("Text 2 speech");
    opText = "Maximum Speed is " + maxPermittedSpeed + " kilometers per hour. Please reduce your speed";
    responsiveVoice.speak(opText, "Hindi Male", { volume: 50 });

}
