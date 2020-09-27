import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
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
import helperText from '../util/helper-text';
import SnackBar from "../util/SnackBar";
import axios  from "axios";

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

export default function SignIn(props) {
  const classes = useStyles();
  const [clicked,setClicked] = useState(false);
  const [isEmail,setIsEmail] = useState(true);
  const [isPassword,setIsPassword] = useState(true);
  const [snackBar,setSnackBar] = useState(null);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  function handleEmailChange (e){
    setEmail(e.target.value)
    if(!Validate.email(e.target.value))
      setIsEmail(false)
    else setIsEmail(true)
  } 

  function handlePasswordChange (e){
    setPassword(e.target.value)
    if(!Validate.password(e.target.value))
      setIsPassword(false)
    else setIsPassword(true)
  }
  function handleSubmit(e){
    e.preventDefault();
    // make API request
    setClicked(true);
  }
  if(clicked)
    return <Email/>

  return (
    <Container component="main" maxWidth="xs">
      {snackBar}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            helperText={!isEmail?helperText.email:""}
          />
          <TextField
            error={!isPassword}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>handlePasswordChange(e)}
            helperText={!isPassword?helperText.password:""}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>handleSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link  to={"/forgot"} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <BottomNav history={props.history}/>
      </div>
    </Container>
  );
}