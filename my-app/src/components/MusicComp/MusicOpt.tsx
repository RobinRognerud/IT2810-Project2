import React from "react";

interface IMusicOptProps {
  updateMusicNo: any;
  musicNo: string;
}

const MusicOpt: React.FC<IMusicOptProps> = ({ musicNo, updateMusicNo }) => {
  return (
    <div id="product-options">
      <div id="music-category">
        <label>
          Happy
          <input
            className="radio"
            name="musicNr"
            type="radio"
            value="0"
            checked={"0" === musicNo}
            onChange={updateMusicNo}
          />
        </label>
        <label>
          Powerful
          <input
            className="radio"
            name="musicNr"
            type="radio"
            value="1"
            checked={"1" === musicNo}
            onChange={updateMusicNo}
          />
        </label>
        <label>
          Wind
          <input
            className="radio"
            name="musicNr"
            type="radio"
            value="2"
            checked={"2" === musicNo}
            onChange={updateMusicNo}
          />
        </label>
      </div>
    </div>
  );
};

export default MusicOpt;
