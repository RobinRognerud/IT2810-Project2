import React from "react";

interface IGetFavoriteButtonProps {
  getFavorite: any;
}

const GetFavoriteButton: React.FC<IGetFavoriteButtonProps> = ({
  getFavorite,
}) => {
  return (
    <div className="FavoriteButton-container">
      <button className="favoriteButton" onClick={getFavorite}>
        Get favorite ❤
      </button>
    </div>
  );
};

export default GetFavoriteButton;
