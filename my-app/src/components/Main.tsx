import React, { useEffect, useState } from "react";
import Music from "./MusicComp/Music";
import MusicOpt from "./MusicComp/MusicOpt";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";
import Poetry from "./PoetryComp/Poetry";
import PoetryOpt from "./PoetryComp/PoetryOpt";

import "../App.css";
import SaveFavoriteButton from "./FavoriteButton/SaveFavoriteButton";
import GetFavoriteButton from "./FavoriteButton/GetFavoriteButton";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  const poems: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/lines,title,author.json",
    "https://poetrydb.org/author,title/Taylor;star/lines,title,author.json",
    "https://poetrydb.org/author,title/Emily%20Dickinson;Summer%20begins%20to%20have%20the%20look/title,lines,author.json",
  ];

  /*Initialize radiobutton values to 0 if nothing is saved in localstorage*/
  const [pictureNo, setPictureNo] = useState(
    sessionStorage.getItem("SessionStoragePictureNo") || "0"
  );

  const [musicNo, setMusicNo] = useState(
    sessionStorage.getItem("SessionStorageMusicNo") || "0"
  );

  const [poetryNo, setPoetryNo] = useState(
    sessionStorage.getItem("SessionStoragePoetryNo") || "0"
  );

  /*Sets the poetry to be fetched from Poetry.tsx*/
  const [poetry, setPoertry] = useState(poems[parseInt(poetryNo)]);

  useEffect(() => {
    setPoertry(poems[parseInt(poetryNo)]);
  }, [poems, poetryNo]);

  /* Save the radiobutton values to localstorage after favoritebutton is clicked */
  const saveFavorite = () => {
    localStorage.setItem("LocalStoragePictureNo", pictureNo);
    localStorage.setItem("LocalStorageMusicNo", musicNo);
    localStorage.setItem("LocalStoragePoetryNo", poetryNo);
  };

  /* Update pictureNo after a radiobutton is clicked */
  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("SessionStoragePictureNo", e.target.value);
    setPictureNo(e.target.value);
  };

  /* Update musicNo after a radiobutton is clicked */
  const updateMusicNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("SessionStorageMusicNo", e.target.value);
    setMusicNo(e.target.value);
  };

  /* Update poetryNo after a radiobutton is clicked */
  const updatePoetryNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("SessionStoragePoetryNo", e.target.value);
    setPoetryNo(e.target.value);
  };

  const getFavorite = () => {
    const pictureNo = localStorage.getItem("LocalStoragePictureNo") || "0";
    const musicNo = localStorage.getItem("LocalStorageMusicNo") || "0";
    const poetryNo = localStorage.getItem("LocalStoragePoetryNo") || "0";

    setPictureNo(pictureNo);
    setMusicNo(musicNo);
    setPoetryNo(poetryNo);
  };

  return (
    <div className="home-container" id="home">
      {/* <div className="gallery"> */}
      <div className="picture-container">
        <DisplayPicture pictureNo={pictureNo} />
      </div>
      <div className="text-container">
        <Poetry poetry={poetry} />
        <Music musicNo={musicNo} />
      </div>
      {/* </div> */}
      <div className="options-container">
        <p id="option-text">
          {" "}
          Make your own art by changing image, music and poetry:
        </p>

        <PictureOpt updatePictureNo={updatePictureNo} pictureNo={pictureNo} />

        <MusicOpt updateMusicNo={updateMusicNo} musicNo={musicNo} />

        <PoetryOpt updatePoetryNo={updatePoetryNo} poetryNo={poetryNo} />

        <p id="favorite-text">Save your favoirte art:</p>
        <SaveFavoriteButton saveFavorite={saveFavorite} />
        <GetFavoriteButton getFavorite={getFavorite} />
      </div>
    </div>
  );
};

export default Main;
