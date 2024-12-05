import Card from '../Card/Card.tsx';
import React from 'react';
import './ContainerSmallCard.scss';
<<<<<<< HEAD
import { Artwork } from '@utils/artworkSchema.ts';
import { ContainerSmallCard } from '@types/componentsPropsTypes.ts';

const ContainerSmallCards: React.FC<ContainerSmallCard> = ({ data }) => {
  return (
    <div className="containerSmallCards">
      {data &&
        data.map((artwork: Artwork) => (
          <Card key={artwork.id} artwork={artwork} />
        ))}
=======

interface Props {
  data: Array<any> | undefined;
}

const ContainerSmallCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="containerSmallCards">
      {data &&
        data.map((artwork: any) => <Card key={artwork.id} artwork={artwork} />)}
>>>>>>> main
    </div>
  );
};

export default ContainerSmallCards;
