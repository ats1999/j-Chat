import React,{useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import HandleJoinForm from "./HandleJoinForm";
import HandleCreateForm from "./HandleCreateForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
    marginTop:20,
    marginLeft:'auto',
    marginRight:"auto"
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function JoinChatGroup(props) {
  // a simple check that will tell, what user wants to do.
  // when he/she clicks on the button.
  const action = {
    joinChatGroup:"join",
    creatChatGroup:"create"
  }
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  let [displayName,setDisplayName] = useState("");
  let [meetingId,setMeetingId] = useState("");
  let [description,setDescription] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <GroupAddIcon/>,
      label: 'Add',
      action:action.joinChatGroup
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <GroupWorkIcon/>,
      label: 'Edit',
      action:action.creatChatGroup
    }
  ];

  function handleSubmit(curAction){
    if(curAction === action.joinChatGroup){
      props.history.push(`/chat?name=${displayName}&id=${meetingId}`)
    }else{
      // create a chat group
    }
  }
  return (
    <div className={classes.root}>
        <h1 style={{marginBottom:"20px"}}>Welcome to Rocket-chat!</h1>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab icon={<GroupWorkIcon/>} label="Join chat-room" {...a11yProps(0)} />
          <Tab icon={<GroupAddIcon/>} label="create chat-room" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <HandleJoinForm 
          handleDisplayName={setDisplayName}
          handleMeetingId={setMeetingId}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <HandleCreateForm
          handleDisplayName={setDisplayName}
          handleMeetingId={setMeetingId}
          handleDescription={setDescription}
          />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            <IconButton onClick={(e)=>handleSubmit(fab.action)} >{fab.icon}</IconButton>
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}