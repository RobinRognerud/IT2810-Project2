import React, { useState } from "react";
import Music from "./MusicComp/Music";
import MusicOpt from "./MusicComp/MusicOpt";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  const [pictureNo, setPictureNo] = useState("0");
  const [musicNo, setMusicNo] = useState("0");

  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  const updateMusicNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicNo(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="picture-container">
        Bilder
        <DisplayPicture pictureNo={pictureNo} />
      </div>
      <div className="text-container">
        Våre installasjoner
        <Music musicNo={musicNo} />
      </div>
      <div className="options-container">
        <PictureOpt updatePictureNo={updatePictureNo} pictureNo={pictureNo} />
        <br />
        <br />
        <MusicOpt updateMusicNo={updateMusicNo} musicNo={musicNo} />
      </div>
    </div>
  );
};

export default Main;
