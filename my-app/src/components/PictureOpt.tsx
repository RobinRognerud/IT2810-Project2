import React, { useState } from "react";

interface IPictureOptProps {
  updatePictureNo: any;
  pictureNo: string;
}

const PictureOpt: React.FC<IPictureOptProps> = ({
  pictureNo,
  updatePictureNo,
}) => {
  return (
    <div id="product-options">
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
