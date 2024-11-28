import './Title.scss';
import React from 'react';
interface Props {
  children?: React.ReactNode | string;
}
const Title: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};
export default Title;
