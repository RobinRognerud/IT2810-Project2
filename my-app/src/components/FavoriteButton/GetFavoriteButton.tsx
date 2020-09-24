import React from "react";

interface IGetFavoriteButtonProps {
  getFavorite: any;
}

const GetFavoriteButton: React.FC<IGetFavoriteButtonProps> = ({
  getFavorite,
}) => {
  return (
    <div>
      <button id="favoriteButton" onClick={getFavorite}>
        Hent favoritt
      </button>
    </div>
  );
};

export default GetFavoriteButton;
