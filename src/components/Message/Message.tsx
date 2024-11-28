import React from 'react';
import './Message.scss';

interface Props {
  children: string;
}

const Message: React.FC<Props> = ({ children }) => {
  return <h2 className={'message'}>{children}</h2>;
};

export default Message;
