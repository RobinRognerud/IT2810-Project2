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
          Music1:
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
          Music2:
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
          Music3:
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
