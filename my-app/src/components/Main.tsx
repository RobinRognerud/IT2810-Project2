import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import DisplayPicture from "./PictureComp/DisplayPicture";
import PictureOpt from "./PictureComp/PictureOpt";

interface IMainProps {}

const Main: React.FC<IMainProps> = (props) => {
  /* LocalStorage: https://www.robinwieruch.de/local-storage-react */
  const [pictureNo, setPictureNo] = useState(
    localStorage.getItem("LocalStoragePictureNo") || "0"
  );

  /*     React.useEffect(() => {
      localStorage.setItem("LocalStoragePictureNo", pictureNo);
    }, [pictureNo]); */

  const saveFavorite = () => {
    localStorage.setItem("LocalStoragePictureNo", pictureNo);
  };

  /*   const getFavorite = () => {
    setPictureNo(localStorage.getItem("LocalStoragePictureNo"));
  }; */

  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="picture-container">
        Bilder
        <DisplayPicture pictureNo={pictureNo} />
      </div>
      <div className="text-container">Våre installasjoner</div>
      <div className="options-container">
        <PictureOpt updatePictureNo={updatePictureNo} pictureNo={pictureNo} />
      </div>
      {/* <FavoriteButton getFavorite={getFavorite} /> */}
      <FavoriteButton saveFavorite={saveFavorite} />
    </div>
  );
};

export default Main;
