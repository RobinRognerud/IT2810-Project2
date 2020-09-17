import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import Music from "./MusicComp/Music";
import MusicOpt from "./MusicComp/MusicOpt";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  const [pictureNo, setPictureNo] = useState(
    localStorage.getItem("LocalStoragePictureNo") || "0"
  );

  const [musicNo, setMusicNo] = useState(
    localStorage.getItem("LocalStorageMusicNo") || "0"
  );

  /* Save the radiobutton values to localstorage after favoritebutton is clicked */
  const saveFavorite = () => {
    localStorage.setItem("LocalStoragePictureNo", pictureNo);
    localStorage.setItem("LocalStorageMusicNo", musicNo);
  };

  /* Update PictureNo after a radiobutton is clicked */
  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  /* Update MusicNo after a radiobutton is clicked */
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
      <FavoriteButton saveFavorite={saveFavorite} />
    </div>
  );
};

export default Main;
