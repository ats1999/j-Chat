import React from 'react'
import "./style/active-user.css";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BlockIcon from '@material-ui/icons/Block';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlagIcon from '@material-ui/icons/Flag';
import Users from "./Users";

function ActiveUsers() {
    let src = "https://live.staticflickr.com/2545/4052988513_d1f9106edd.jpg";  
    let userName = "Rahul!";
    let users = [{imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"},
    {imageSrc:src,userName:userName,userStatus:"There  is no status"}]
    return (
        <div className="active__users">
            <h1>Active users</h1>
            <Users users={users}/>
        </div>
    )
}

export default ActiveUsers


const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function UserAvatar({imageSrc,userName}){
    const classes = useStyles();

    return <div className={classes.root}>
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot"
    >
      <Avatar alt={userName} src={imageSrc} />
    </StyledBadge>
  </div>
}