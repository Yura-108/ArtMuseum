import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  length: number;
}

const CardSkeleton: React.FC = () => (
  <ContentLoader
    className={'skeletonCard'}
    speed={1}
    width={387}
    height={514}
    viewBox="0 0 387 514"
    backgroundColor="#DEDEDE"
    foregroundColor="#CCCCCC"
  >
    <rect x="0" y="0" rx="5" ry="5" width="387" height="400" />
    <rect x="50" y="418" rx="5" ry="5" width="200" height="20" />
    <rect x="50" y="456" rx="5" ry="5" width="150" height="20" />
    <rect x="50" y="494" rx="5" ry="5" width="100" height="20" />
  </ContentLoader>
);

const CardContainerSkeleton: React.FC<Props> = ({ length }) => (
  <div className={'containerCards'}>
    {Array.from({ length: length }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export default CardContainerSkeleton;
