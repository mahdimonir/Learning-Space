//* OOP => abstraction
//! idea to implementation
/*
    1. interface
    2. abstract class
*/

/*
//? idea
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//? implementation

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Music playing...");
  }
  pause(): void {
    console.log("Music paused...");
  }
  stop(): void {
    console.log("Music stopped...");
  }
}
const MxPlayer = new MusicPlayer(); //! instance
MxPlayer.play();
MxPlayer.pause();
MxPlayer.stop();
*/

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
  play(): void {
    console.log("Music playing...");
  }
  pause(): void {
    console.log("Music paused...");
  }
  stop(): void {
    console.log("Music stopped...");
  }
}
const VLCPlayer = new MusicPlayer();
VLCPlayer.play();
VLCPlayer.pause();
VLCPlayer.stop();
