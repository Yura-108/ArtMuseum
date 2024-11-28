import React from 'react';
import './SectionTitle.scss';

interface ISectionTitle {
  h4: string;
  h2: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ h4, h2 }) => {
  return (
    <div className="containerTitle">
      <h4>{h4}</h4>
      <h2>{h2}</h2>
    </div>
  );
};

export default SectionTitle;
