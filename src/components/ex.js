import React, { Component,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {fetchUrl} from '../redux/dataAction.js'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import { makeStyles } from '@material-ui/core/styles';

// import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Menu from './menu'
import Mmenu from './mmenu'
import Footer from "./footer"
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },media: {
    height: 500,
    
  },card: {
    maxWidth: 600,
  },
}));
function Ex({userData,fetchUrl})  {
 
  const classes = useStyles();
  
 
        useEffect(()=>{
            fetchUrl()
        },[])
        return userData.loading ? (
          
          <div>
           
           <Skeleton variant="rect"  height={100}  className="mb-3"/>
            <Container fixed>
            <Skeleton variant="rect"  height={500} />
            <Skeleton />
              <Skeleton width="60%" />
              <Skeleton variant="rect"  height={500} />
            <Skeleton />
              <Skeleton width="60%" />
            </Container>
          
        </div>
          ) : userData.error ? (
            <h2>{userData.error}</h2>
          ) : (
            
            <div>
             <Menu></Menu>
              <div>
              
              <Container maxWidth="xl">
             
        <Typography component="div" >

        {/* {
userData.data["items"].map(r=><p>{r["snippet"]["title"]}</p>)

                  } */}




      {userData.data["items"].map(ee => (

      <Mmenu key={ee["id"]} youtubelink={"https://www.youtube.com/watch/"+ee["snippet"]["resourceId"]["videoId"]} videolink={"https://www.youtube.com/embed/"+ee["snippet"]["resourceId"]["videoId"]+"?rel=0"} titile={ee["snippet"]["title"]}></Mmenu>
 

          )
          )}
     

      
        </Typography>
      </Container>
               
           
              </div>
      <Footer></Footer>
            </div>
          )
      
  
}
const mapStateToProps = state =>{
    return{
        userData:state.userrequest
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUrl:()=>dispatch(fetchUrl())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Ex);