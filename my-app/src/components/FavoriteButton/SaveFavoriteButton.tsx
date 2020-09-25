import React from "react";

interface ISaveFavoriteButtonProps {
  saveFavorite: any;
}

const SaveFavoriteButton: React.FC<ISaveFavoriteButtonProps> = ({
  saveFavorite,
}) => {
  return (
    <div id="saveFavoriteButton">
      <button id="favoriteButton" onClick={saveFavorite}>
        Lagre utstilling
      </button>
    </div>
  );
};

export default SaveFavoriteButton;
