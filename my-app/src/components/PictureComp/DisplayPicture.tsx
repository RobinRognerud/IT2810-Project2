import React from "react";
import "./Picture.css";

interface IPictureOptProps {
  pictureNo: string;
}

const DisplayPicture: React.FC<IPictureOptProps> = (props) => {
  const pictureList = [
    "https://www.svgrepo.com/show/30310/sun.svg",
    "https://www.svgrepo.com/show/12345/witch-hat.svg",
    "https://www.svgrepo.com/show/299316/magic-wand-wizard.svg",
  ];

  const pictureNo = props.pictureNo;

  return (
    <div id="product-options">
      <div id="picture-category">
        <img className="Svg" src={pictureList[parseInt(pictureNo)]} alt=""/>
      </div>
    </div>
  );
};

export default DisplayPicture;
