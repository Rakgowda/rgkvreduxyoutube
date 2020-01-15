import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import fetchNews from '../redux/getNews/newsAction'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin:"5px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
 
  cover: {
    width: "300px",
    height: "120px",

    
  },

 
}));
 function AllNews(){
    const classes = useStyles();
    const newsstate = useSelector(state=>state.newsreducer)
    const newsDispatch = useDispatch()

    useEffect(()=>{
        newsDispatch(fetchNews("sports"))
    },[])
  
 return newsstate.newsloading?(<h1>loading</h1>):newsstate.newserr?(<h1>"error"</h1>):<div>{console.log(newsstate.newsdata)} {newsstate.newsdata["articles"].map(resultNews=>(
    
<Container maxWidth="sm">
<Card className={classes.card}>
      <CardMedia
  className={classes.cover}
  image={resultNews.urlToImage}
  title={resultNews.title}
/>
  <div className={classes.details}>
    <CardContent className={classes.content}>
      <Typography component="p" variant="p">
      {resultNews.title}
      </Typography>
     
    </CardContent>
  </div>
 
</Card> 
      </Container>
 
  
))}</div>


    
        
    

}

export default AllNews;