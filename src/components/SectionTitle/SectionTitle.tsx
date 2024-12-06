import React from 'react';
import './SectionTitle.scss';
import { SectionTitleProps } from '@types/componentsPropsTypes.ts';

const SectionTitle: React.FC<SectionTitleProps> = ({ h4, h2 }) => {
  return (
    <div className="containerTitle">
      <h4>{h4}</h4>
      <h2>{h2}</h2>
    </div>
  );
};

export default SectionTitle;
