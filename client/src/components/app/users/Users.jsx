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

export default function User({users}) {
  const classes = useStyles();
  let userList = users.map((user,index)=>{
    return <>
      <ListItem button component={Link} to="/login" key={index} alignItems="flex-start">
          <ListItemAvatar>
          <Avatar alt={user.userName} src={user.imageSrc} />
        </ListItemAvatar>

        <ListItemText
          primary={user.userName}
        />
    </ListItem>
        <Divider variant="inset" component="li" />
    </>
  })
  return (
    <List className={classes.root}>
      <Search/>
      {userList}
    </List>
  );
}