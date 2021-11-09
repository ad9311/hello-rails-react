import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/message/messageReducer';

const Message = () => {
  const { status, message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'ready') {
      dispatch(fetchMessage());
    }
  }, [status]);

  const flag = () => {
    if (status == 'ready') {
      return String.fromCodePoint(message.code_a, message.code_b);
    }
  }

  if (message !== null) {
    return (
      <div className="text-center">
        <h1>{message.content}</h1>
        <h2>{message.language}</h2>
        <span>{flag()}</span>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h1>No Messages :C</h1>
      </div>
    );
  }
}

export default Message;
