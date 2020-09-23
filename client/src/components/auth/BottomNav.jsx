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

export default function BottomNav() {
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
      <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="SignUp" icon={<EnhancedEncryptionIcon />} />
      <BottomNavigationAction label="Login" icon={<LockIcon />} />
      <BottomNavigationAction label="Chatting" icon={<ExploreIcon />} />
    </BottomNavigation>
  );
}
