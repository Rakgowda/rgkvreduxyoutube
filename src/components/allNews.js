import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import fetchNews from '../redux/getNews/newsAction'
import fetchNextNews from '../redux/getNews/newsAction'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom:5
  },
  media: {
    height: 140,
  },
});
const theme = {
  spacing: 8,
}
var page=0;
 function AllNews(){
  const classes = useStyles();
  const newsstate = useSelector(state=>state.newsreducer)
  const newsDispatch = useDispatch()


  useBottomScrollListener(()=>{
  page+=5;
newsDispatch(fetchNextNews("sports",page))


  })
 
    useEffect(()=>{
      
        newsDispatch(fetchNews("sports",page))
    },[])
  
 return newsstate.newsloading?(<h1>loading</h1>):newsstate.newserr?(<h1>"error"</h1>):<div>{console.log(newsstate.newsdata)} {newsstate.newsdata.map(resultNews=>(
 
 
 
<Container maxWidth="sm">
<Card className={classes.card} mb={5}>
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
         
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Container>
 
  
))}</div>


    
        
    

}

export default AllNews;