import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Email from "./Email";
import BottomNav from "./BottomNav";

// validate
import Validate from '../util/validate';
import HelperText from "../util/helper-text";
import validate from '../util/validate';
import SnackBar from "../util/SnackBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Fotgot(props) {
  const classes = useStyles();
  const [clicked,setClicked] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [snackBar,setSnackBar] = useState(null);
  const  [email,setEmail] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    setClicked(true);
  }
  if(clicked)
    return <Email/>
  
    function handleEmailChange (e){
      setEmail(e.target.value)
        if(!validate.email(e.target.value))
          setIsEmail(false)
        else setIsEmail(true)
    }

  return (
    <Container component="main" maxWidth="xs">
      {snackBar}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            error={!isEmail}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>handleEmailChange(e)}
            helperText={isEmail?"":HelperText.email}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>handleSubmit(e)}
          >
            Get verification URL
          </Button>
        </form>
      <BottomNav history={props.history}/>
      </div>
    </Container>
  );
}