import React from "react";

interface IPoetryOptProps {
  updatePoetryNo: any;
  poetryNo: string;
}

const PoetryOpt: React.FC<IPoetryOptProps> = ({ poetryNo, updatePoetryNo }) => {
  return (
    <div id="product-options">
      <div id="poetry-category">
        <p id="titleRB"> Poetry:</p>

        <label>
          Dance
          <input
            className="radio"
            name="poetryNr"
            type="radio"
            value="0"
            checked={"0" === poetryNo}
            onChange={updatePoetryNo}
          />
        </label>
        <label>
          The star
          <input
            className="radio"
            name="poetryNr"
            type="radio"
            value="1"
            checked={"1" === poetryNo}
            onChange={updatePoetryNo}
          />
        </label>
        <label>
          Summer
          <input
            className="radio"
            name="poetryNr"
            type="radio"
            value="2"
            checked={"2" === poetryNo}
            onChange={updatePoetryNo}
          />
        </label>
      </div>
    </div>
  );
};

export default PoetryOpt;
