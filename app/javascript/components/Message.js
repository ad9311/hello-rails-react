import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/message/messageReducer';

const Message = () => {
  const { status, message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [status]);

  return (
    <div>
      <h1>{message.content}</h1>
    </div>
  );
}

export default Message;
