import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Search from "../../util/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function User({onlineUsers}) {
  const classes = useStyles();
  let userList = [];
  for(let user of onlineUsers){
      let curUser = <>
          <ListItem button component={Link} to={`#${user[0]}`} key={user[0]} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user[1].userName}>{user[1].userName.charAt(0).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={user[1].userName}></ListItemText>
        </ListItem>
          <Divider variant="inset" component="li" />
      </>
      userList.push(curUser);
  }

  return (
    <List className={classes.root}>
      <Search/>
      {userList}
    </List>
  );
}