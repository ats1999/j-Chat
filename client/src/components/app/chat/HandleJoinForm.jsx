import React from 'react';
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    marginTop:10,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function HandleJoinForm({handleDisplayName,handleMeetingId}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <h1>This is th heading!</h1>
      <FormControl className={classes.margin}>
        <BootstrapInput 
        placeholder="Display  Name" 
        onChange={(e)=>handleDisplayName(e.target.value)} 
        id="bootstrap-input" />

        <BootstrapInput 
        placeholder="Meeting Id" 
        onChange={(e)=>handleMeetingId(e.target.value)} 
        id="bootstrap-input" />
      </FormControl>
    </form>
  );
}
