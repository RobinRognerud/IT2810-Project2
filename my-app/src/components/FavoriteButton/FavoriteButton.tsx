import React from "react";

interface IFavoriteButtonProps {
  saveFavorite: any;
}

const FavoriteButton: React.FC<IFavoriteButtonProps> = ({ saveFavorite }) => {
  return (
    <div>
      <p>Lagre din favoritt utstillingen til neste gang!</p>
      <button onClick={saveFavorite}>Lagre utstilling</button>
    </div>
  );
};

export default FavoriteButton;
