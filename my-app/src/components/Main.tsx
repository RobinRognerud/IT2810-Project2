import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import Music from "./MusicComp/Music";
import MusicOpt from "./MusicComp/MusicOpt";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";
import Poetry from "./PoetryComp/Poetry";
import PoetryOpt from "./PoetryComp/PoetryOpt";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  const [pictureNo, setPictureNo] = useState(
    localStorage.getItem("LocalStoragePictureNo") || "0"
  );

  const [musicNo, setMusicNo] = useState(
    localStorage.getItem("LocalStorageMusicNo") || "0"
  );

  const [poetryNo, setPoetryNo] = useState(
    localStorage.getItem("LocalStoragePoetryNo") || "0"
  );

  /* Save the radiobutton values to localstorage after favoritebutton is clicked */
  const saveFavorite = () => {
    localStorage.setItem("LocalStoragePictureNo", pictureNo);
    localStorage.setItem("LocalStorageMusicNo", musicNo);
    localStorage.setItem("LocalStoragePoetryNo", poetryNo);
  };

  /* Update pictureNo after a radiobutton is clicked */
  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  /* Update musicNo after a radiobutton is clicked */
  const updateMusicNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicNo(e.target.value);
  };

  /* Update poetryNo after a radiobutton is clicked */
  const updatePoetryNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoetryNo(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="picture-container">
        <DisplayPicture pictureNo={pictureNo} />
      </div>
      <div className="text-container">
        Dikt + lyd
        <Poetry poetryNo={poetryNo} />
        <Music musicNo={musicNo} />
      </div>
      <div className="options-container">
        <PictureOpt updatePictureNo={updatePictureNo} pictureNo={pictureNo} />
        <MusicOpt updateMusicNo={updateMusicNo} musicNo={musicNo} />
        <PoetryOpt updatePoetryNo={updatePoetryNo} poetryNo={poetryNo} />
        <FavoriteButton saveFavorite={saveFavorite} />
      </div>
    </div>
  );
};

export default Main;
