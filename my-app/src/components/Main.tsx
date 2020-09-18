import React, { useState } from "react";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";
import Music from "./Music";
import Poetry from "./PoetryComp/Poetry";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  const [pictureNo, setPictureNo] = useState("0");

  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="picture-container">
        Bilder
        <DisplayPicture pictureNo={pictureNo} />
      </div>
      <div className="text-container">
        Dikt + lyd
        <Poetry /> <Music />
      </div>
      <div className="options-container">
        <PictureOpt updatePictureNo={updatePictureNo} pictureNo={pictureNo} />
      </div>
    </div>
  );
};

export default Main;
