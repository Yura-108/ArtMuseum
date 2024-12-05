import React from 'react';
import './ErrorMessage.scss';
<<<<<<< HEAD
import { ErrorProps } from '@types/componentsPropsTypes.ts';

const ErrorMessage: React.FC<ErrorProps> = ({ children }) => {
=======

interface Props {
  children: string;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
>>>>>>> main
  return <h2 className={'errorMessage'}>{children}</h2>;
};

export default ErrorMessage;
