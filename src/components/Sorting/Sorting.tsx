import React from 'react';
import './Sorting.scss';
import { SortMethod } from '@types/SortMethod.ts';
import { SortingProps } from '@types/componentsPropsTypes.ts';

const Sorting: React.FC<SortingProps> = ({ setSortMethod }) => {
  const handleSortChange = (method: SortMethod) => {
    setSortMethod(method);
  };

  return (
    <div className={'sorting'}>
      <span>Sorting:</span>
      <select
        name="sortingSelector"
        id="sortingSelector"
        onChange={(e) => handleSortChange(e.target.value as SortMethod)}
      >
        <option value="title">By title</option>
        <option value="artist">By artist</option>
        <option value="date">By date</option>
      </select>
    </div>
  );
};

export default Sorting;
