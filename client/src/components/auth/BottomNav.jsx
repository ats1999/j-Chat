import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import Divider from "@material-ui/core/Divider";
import ExploreIcon from '@material-ui/icons/Explore';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Divider /><Divider />
      <BottomNavigationAction onClick={(e)=> props.history.push("/")} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction onClick={(e)=> props.history.push("/signup")} label="SignUp" icon={<EnhancedEncryptionIcon />} />
      <BottomNavigationAction onClick={(e)=> props.history.push("/login")} label="Login" icon={<LockIcon />} />
      <BottomNavigationAction onClick={(e)=> props.history.push("/chat")} label="Chatting" icon={<ExploreIcon />} />
    </BottomNavigation>
  );
}
