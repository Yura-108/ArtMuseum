import React from 'react';
import './ErrorMessage.scss';

interface Props {
  children: string;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <h2 className={'errorMessage'}>{children}</h2>;
};

export default ErrorMessage;
