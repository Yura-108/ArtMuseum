import './Title.scss';
import React from 'react';
import { TitleProps } from '@types/componentsPropsTypes.ts';

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
export default Title;
