import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core/';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ IsSignIn, setIsSignIn, isLastItem, name, text }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      if (IsSignIn) {
        ref.current.scrollIntoView();
        setIsSignIn(false);
      } else {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isLastItem]);

  return (
    <ListItem ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
