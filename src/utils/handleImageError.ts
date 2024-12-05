import plugImage from '@assets/images/plug.svg';
import React from 'react';

const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  event.currentTarget.src = plugImage;
  event.currentTarget.alt = 'Placeholder image';
};

export default handleImageError;
