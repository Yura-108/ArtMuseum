import React from 'react';
import bookmark_hollow from '@images/favoriteIcon.svg';
import bookmark_filled from '@images/bookmark_filled.svg';
import './CardInfo.scss';
import { useFavoritesContext } from '../../store/FavoritesContext.tsx';

interface CardInfoProps {
  id: number | null;
  title: string | null;
  artist: string | null;
  on_loan_display: string | null;
}

const CardInfo: React.FC<CardInfoProps> = ({
  id,
  title,
  artist,
  on_loan_display,
}) => {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoritesContext();
  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div className="info">
      <div className="text">
        <h4>{title}</h4>
        <h6>{artist}</h6>
        <h5>{on_loan_display ? 'Public' : 'Private'}</h5>
      </div>
      <button
        className="favorite"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleFavorite();
        }}
      >
        <img
          src={isFavorite(id) ? bookmark_filled : bookmark_hollow}
          alt="favorite"
        />
      </button>
    </div>
  );
};

export default CardInfo;
