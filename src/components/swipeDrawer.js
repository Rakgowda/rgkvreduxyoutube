import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from "../images/logo.jpg"
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Box from '@material-ui/core/Box';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';

import {Link} from "react-router-dom"
const useStyles = makeStyles(theme=>({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
  sipedrawer:{
      background:"red",
      background:"#ffb75e", /* fallback for old browsers */
background: "-webkit-linear-gradient(to right, #ffb75e, #ed8f03)", /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #ffb75e, #ed8f03)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  },
  liststyle:{
      fontWeight:"bold"
  },
  avatar:{
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  boxavatr:{
    display:"flex",
    alignItems:"center",
        justifyContent:"center",
    marginBottom:"1rem",
    marginTop:"1rem"
  },
  listhover:{
    "&:hover":{
      backgroundColor:"transparent",
      color:"black"
    }
  },
  link:{
    color:"black",
    textDecoration:"none",
    "&:hover":{
      backgroundColor:"transparent",
      color:"black",
      textDecoration:"none",
    }
  }
}));

export default function SwipeDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
         <Box className={classes.boxavatr}><Avatar alt="RGKV" src={logo} variant="square" className={classes.avatar}></Avatar></Box> 
         <Divider />

        <List>
         

<ListItem button key={"Home"} className={classes.listhover} >
              <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
              <Link className={classes.link} to="/"><ListItemText primary={"Home"} className={classes.liststyle} /></Link>
            </ListItem>
            <ListItem button key={"News"} className={classes.listhover}>
              <ListItemIcon><LocalConvenienceStoreIcon></LocalConvenienceStoreIcon></ListItemIcon>
              <Link className={classes.link} to="/news"> <ListItemText primary={"News"} className={classes.liststyle} /></Link>
              
            </ListItem>
<ListItem button key={"YT"} className={classes.listhover} component="a" href="https://www.youtube.com/channel/UCnw-TdFO6KgTWTxBatPWDMw?view_as=subscriber" >
              <ListItemIcon><YouTubeIcon></YouTubeIcon></ListItemIcon>
              <ListItemText primary={"Youtube Link"} className={classes.liststyle} />
            </ListItem>
        </List>
        <Divider />
        <List>
          {['Feedback'].map((text, index) => (
            <ListItem button key={text} className={classes.listhover} component="a" href="mailto:rakshithgowdakv@gmail.com?subject=RGKV react feedback">
              <ListItemIcon><FeedbackIcon></FeedbackIcon></ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
  
  
    return (
      <div>
        <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{fontSize:"2rem"}}></MenuIcon></Button>
       
        <SwipeableDrawer
        classes={{ paper: classes.sipedrawer }}
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {sideList('left')}
        </SwipeableDrawer>
       
      </div>
    );
  }

