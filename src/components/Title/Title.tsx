import './Title.scss';
import React from 'react';
<<<<<<< HEAD
import { TitleProps } from '@types/componentsPropsTypes.ts';

const Title: React.FC<TitleProps> = ({ children }) => {
=======
interface Props {
  children?: React.ReactNode | string;
}
const Title: React.FC<Props> = ({ children }) => {
>>>>>>> main
  return <h1>{children}</h1>;
};
export default Title;
