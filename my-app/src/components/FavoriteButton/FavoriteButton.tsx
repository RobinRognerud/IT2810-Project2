import React from "react";

interface IFavoriteButtonProps {
  saveFavorite: any;
}

const FavoriteButton: React.FC<IFavoriteButtonProps> = ({ saveFavorite }) => {
  return (
    <div>
      <button onClick={saveFavorite}>Lagre din favoritt her</button>
    </div>
  );
};

export default FavoriteButton;
