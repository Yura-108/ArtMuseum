import Card from '../Card/Card.tsx';
import React from 'react';
import './ContainerSmallCard.scss';
import { Artwork } from '@utils/artworkSchema.ts';
import { ContainerSmallCard } from '@types/componentsPropsTypes.ts';

const ContainerSmallCards: React.FC<ContainerSmallCard> = ({ data }) => {
  return (
    <div className="containerSmallCards">
      {data &&
        data.map((artwork: Artwork) => (
          <Card key={artwork.id} artwork={artwork} />
        ))}
    </div>
  );
};

export default ContainerSmallCards;
