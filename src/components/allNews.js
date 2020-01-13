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
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });
 function AllNews(){
    const classes = useStyles();
    const newsstate = useSelector(state=>state.newsreducer)
    const newsDispatch = useDispatch()

    useEffect(()=>{
        newsDispatch(fetchNews("sports"))
    },[])
  
 return newsstate.newsloading?(<h1>loading</h1>):newsstate.newserr?(<h1>"error"</h1>):<div>{console.log(newsstate.newsdata)} {newsstate.newsdata["articles"].map(resultNews=>(
    
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={resultNews.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {resultNews.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {resultNews.content}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  
))}</div>


    
        
    

}

export default AllNews;