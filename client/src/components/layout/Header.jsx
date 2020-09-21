import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Slide,Zoom } from '@material-ui/core';
import Feature from './Feature';
// static 
import ChatAppImage from "./image/chat-app.jpg";
import OpenSourceImage from './image/open-source.svg';
import GroupChatImage from "./image/group-chat.svg";
import PrivateChatImage from "./image/private-chat.svg";
import DeveloperImage from "./image/developer.png";

import "./style/header.css";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Header() {
    const classes = useStyles()
    return <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Slide in direction="right" timeout={2000} >
                <img  src={ChatAppImage} className="header__image" alt="" />
            </Slide>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Slide in direction="top" timeout={2000} >
            <div><h1>Create instant connections with proactive
                live chat software, built for developer by developer.</h1>
            <h3>Enjoy this open source software for free</h3></div>
        </Slide>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Slide in direction="bottom" timeout={2000} >
          <div>
              <h1>The Ultimate Communication Hub</h1>
              <p>Control your communication, 
                  manage your data, and have your own
                   collaboration platform to improve team 
                   productivity. Lead with the open-source power.
                   </p>
          </div>
          </Slide>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Slide in direction="right" timeout={2000} >
        <img  src={OpenSourceImage} className="header__image" alt="" />
        </Slide>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Zoom in timeout={3000}>
            <Feature image={GroupChatImage}
                featureName="Chat in group"
                content="Communicate and collaborate with your team, 
                chat in real-time.Improve productivity by discussing and sharing ideas."
            />
        </Zoom>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Zoom in timeout={3000}>
            <Feature image={PrivateChatImage}
                featureName="Chat in private"
                content="People care more about their privacy now than ever before.
                Chat Anonymously and Free. The chat service is completely anonymous to others."
            />
        </Zoom>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Zoom in timeout={3000}>
            <Feature image={DeveloperImage}
                featureName="Built by Developers, for Developers"
                content="Developers are high on Fusebill’s priority list because they make our 
                subscription billing platform perform for our customers."
            />
        </Zoom>
      </Grid>
    </Grid>
  </div>
}

export default Header
