import React from "react";

interface ISaveFavoriteButtonProps {
  saveFavorite: any;
}

const SaveFavoriteButton: React.FC<ISaveFavoriteButtonProps> = ({
  saveFavorite,
}) => {
  return (
    <div className="FavoriteButton-container">
      <button className="favoriteButton" onClick={saveFavorite}>
        Save favorite ❤
      </button>
    </div>
  );
};

export default SaveFavoriteButton;
