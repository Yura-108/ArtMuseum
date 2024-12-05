import React from 'react';
import './SectionTitle.scss';
<<<<<<< HEAD
import { SectionTitleProps } from '@types/componentsPropsTypes.ts';

const SectionTitle: React.FC<SectionTitleProps> = ({ h4, h2 }) => {
=======

interface ISectionTitle {
  h4: string;
  h2: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ h4, h2 }) => {
>>>>>>> main
  return (
    <div className="containerTitle">
      <h4>{h4}</h4>
      <h2>{h2}</h2>
    </div>
  );
};

export default SectionTitle;
