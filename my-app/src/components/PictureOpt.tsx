import React, { useState } from "react";
import "./Picture.css";

interface IPictureOptProps {}

const PictureOpt: React.SFC<IPictureOptProps> = (props) => {
  const [pictureNo, setPictureNo] = useState("0");

  const updatePictureNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureNo(e.target.value);
  };

  const pictureList = [
    "https://www.svgrepo.com/show/30310/sun.svg",
    "https://www.svgrepo.com/show/277708/owl.svg",
    "https://www.svgrepo.com/show/77172/cat.svg",
  ];

  return (
    <div id="product-options">
      <div>
        {" "}
        <img
          className="Svg"
          src={pictureList[parseInt(pictureNo)]}
          alt="Harry Potter"
        />{" "}
      </div>
      <div id="picture-category">
        <label>
          Choice 1:
          <input
            name="pictureNr"
            type="radio"
            value="0"
            checked={"0" === pictureNo}
            onChange={updatePictureNo}
          />
        </label>
        <label>
          Choice 2:
          <input
            name="pictureNr"
            type="radio"
            value="1"
            checked={"1" === pictureNo}
            onChange={updatePictureNo}
          />
        </label>
        <label>
          Choice 3:
          <input
            name="pictureNr"
            type="radio"
            value="2"
            checked={"2" === pictureNo}
            onChange={updatePictureNo}
          />
        </label>
      </div>
    </div>
  );
};

export default PictureOpt;
