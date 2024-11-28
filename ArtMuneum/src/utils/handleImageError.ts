import React from 'react';
import plugImage from '@images/plug.svg';

const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  event.currentTarget.src = plugImage;
  event.currentTarget.alt = 'Placeholder image';
};

export default handleImageError;
