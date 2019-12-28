import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logo from "../images/logo.jpg"

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector,useDispatch} from "react-redux"
import fetchSub from "../redux/getSubcri/subscriberAction"
import Skeleton from '@material-ui/lab/Skeleton';
import CountUp from 'react-countup';

import SwipeDrawer from './swipeDrawer'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menu:{
      backgroundColor:"rgb(253, 142, 10)",
      marginBottom:"1rem",
     
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
  title: {
    flexGrow: 1,
    color:"black"
  },
  poptitle: {
    textAlign:"center",
    color:"black",
    margin:"5px"
  },
  subc:{
   color:"black",
    flexGrow: 1,
    

  }
  ,large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },small:{
      border:"2px solid black",
  },
  medium:{
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  logopop:{
      width:"300px",
      height:"300px",
      margin:"auto"
  },
 
}));

function Menu(){

    const subcridata = useSelector(state=>state.subreducer)
    const subDispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      const classes = useStyles();
      
    useEffect(()=>{
        subDispatch(fetchSub())
    },[])


    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.menu} >
          <Toolbar>
            
            <Typography variant="h4" className={classes.title}>
              <SwipeDrawer></SwipeDrawer>
              
            </Typography>
            <Typography variant="h3" className={classes.subc}>
              {subcridata.loading ?( <div><Skeleton variant="text" width="100px"/></div>):subcridata.error ? (
        <h2>{subcridata.error}</h2>
      ) : <CountUp end={subcridata.data["items"][0]["statistics"]["subscriberCount"]} duration={2.75}/>}
              <Typography variant="h6" style={{color:"black",marginLeft:"-30px","font-weight": 300,"font-style": "normal"}}>
              Subscribers<YouTubeIcon style={{color:"red",fontSize:"2rem"}}>youtube</YouTubeIcon>
            </Typography>
            </Typography>
            <Avatar alt="RGKV" src={logo}  className={classes.medium} onClick={handleClickOpen}/>
          </Toolbar>
        </AppBar>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"RGKV youtube channel"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <Avatar alt="logo" src={logo} className={classes.logopop} />
            <Typography variant="h4" className={classes.poptitle}>
              RGKV
              
            </Typography>
              RGKV kannada youtube video creator haagu part time web developer.
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            
            <Button onClick={handleClose} color="primary" autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
      )
    
    
  
     
}


export default Menu;