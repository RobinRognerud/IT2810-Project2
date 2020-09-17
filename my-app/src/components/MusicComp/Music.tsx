import React from "react";
import music1 from "../../media/music/Prologue.mp3";
import music2 from "../../media/music/ChristmasAtHogwarts.mp3";
import music3 from "../../media/music/HarryWondrousWorld.mp3";

interface IMusicProps {
  musicNo: string;
}

const Music: React.FC<IMusicProps> = (props) => {
  const musicNo = props.musicNo;
  const audio = document.querySelector("audio");

  const music = () => {
    if (musicNo === "0") {
      return music1;
    } else if (musicNo === "1") {
      return music2;
    } else if (musicNo === "2") {
      return music3;
    }
    if (audio != null) {
      audio.load();
    }
  };

  return (
    <div>
      <audio controls src={music()}></audio>
    </div>
  );
};

export default Music;
