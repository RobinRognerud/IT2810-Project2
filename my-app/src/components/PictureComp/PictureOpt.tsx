import React from "react";

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
          Singing ball
          <input
            className="radio"
            name="pictureNr"
            type="radio"
            value="0"
            checked={"0" === pictureNo}
            onChange={updatePictureNo}
          />
        </label>
        <label>
          Abstract
          <input
            className="radio"
            name="pictureNr"
            type="radio"
            value="1"
            checked={"1" === pictureNo}
            onChange={updatePictureNo}
          />
        </label>
        <label>
          Tree
          <input
            className="radio"
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
