import React from "react";

interface ISaveFavoriteButtonProps {
  saveFavorite: any;
}

const SaveFavoriteButton: React.FC<ISaveFavoriteButtonProps> = ({
  saveFavorite,
}) => {
  return (
    <div>
      <button id="favoriteButton" onClick={saveFavorite}>
        Hent favoritt
      </button>
    </div>
  );
};

export default SaveFavoriteButton;
