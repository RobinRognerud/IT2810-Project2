import React from "react";

interface IGetFavoriteButtonProps {
  getFavorite: any;
}

const GetFavoriteButton: React.FC<IGetFavoriteButtonProps> = ({
  getFavorite,
}) => {
  return (
    <div>
      <p>Lagre din favoritt utstillingen til neste gang!</p>
      <button id="favoriteButton" onClick={getFavorite}>
        Lagre utstilling
      </button>
    </div>
  );
};

export default GetFavoriteButton;
