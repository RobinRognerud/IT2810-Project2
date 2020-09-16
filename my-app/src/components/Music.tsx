import React from "react";
import music1 from "../media/music/Prologue.mp3";
import music2 from "../media/music/ChristmasAtHogwarts.mp3";
import music3 from "../media/music/HarryWondrousWorld.mp3";

interface IMusicProps {}

//const music1 = "../public/test/01-Prologue.mp3";

const Music: React.SFC<IMusicProps> = (props) => {
  return (
    <div>
      <audio controls>
        <source src={music1} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Music;
