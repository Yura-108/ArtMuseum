import Card from '../Card/Card.tsx';
import React from 'react';
import './ContainerSmallCard.scss';

interface Props {
  data: Array<any> | undefined;
}

const ContainerSmallCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="containerSmallCards">
      {data &&
        data.map((artwork: any) => <Card key={artwork.id} artwork={artwork} />)}
    </div>
  );
};

export default ContainerSmallCards;
