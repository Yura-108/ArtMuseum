import React from 'react';
import ContentLoader from 'react-content-loader';

const ArtworkSkeleton: React.FC = () => (
  <ContentLoader
    speed={1}
    width={1280}
    height={574}
    viewBox="0 0 1280 574"
    backgroundColor="#DEDEDE"
    foregroundColor="#CCCCCC"
  >
    {/*image*/}
    <rect x="0" y="0" rx="5" ry="5" width="497" height="570" />
    {/*title*/}
    <rect x="570" y="10" rx="5" ry="5" width="500" height="20" />
    <rect x="570" y="60" rx="5" ry="5" width="300" height="20" />
    <rect x="570" y="110" rx="5" ry="5" width="100" height="20" />
    {/*overview*/}
    <rect x="570" y="300" rx="5" ry="5" width="400" height="20" />
    <rect x="570" y="350" rx="5" ry="5" width="400" height="20" />
    <rect x="570" y="400" rx="5" ry="5" width="400" height="20" />
    <rect x="570" y="450" rx="5" ry="5" width="400" height="20" />
    <rect x="570" y="500" rx="5" ry="5" width="400" height="20" />
    <rect x="570" y="550" rx="5" ry="5" width="100" height="20" />
  </ContentLoader>
);

export default ArtworkSkeleton;
