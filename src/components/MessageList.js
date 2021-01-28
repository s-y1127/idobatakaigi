import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: '100%',
    overflow: 'auto',
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef.orderByKey().on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text, index }) => {
        return <MessageItem key={key} name={name} text={text}></MessageItem>;
      })}
    </List>
  );
};

export default MessageList;
