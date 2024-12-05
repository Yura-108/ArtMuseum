import React from 'react';
import './ErrorMessage.scss';
import { ErrorProps } from '@types/componentsPropsTypes.ts';

const ErrorMessage: React.FC<ErrorProps> = ({ children }) => {
  return <h2 className={'errorMessage'}>{children}</h2>;
};

export default ErrorMessage;
