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
import Snackbar from '@material-ui/core/Snackbar';
// import { makeStyles } from '@material-ui/core/styles';
import Alert  from '@material-ui/lab/Alert';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginBottom:5
  },
  media: {
    height: 140,
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    sn:{
      backgroundColor:"red",
      textColor :"red"
    }
  },
}));

var page=0;
 function AllNews(){
  const classes = useStyles();
  const newsstate = useSelector(state=>state.newsreducer)
  const newsDispatch = useDispatch()
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick=()=>{
    setState({ open: true});
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  useBottomScrollListener(()=>{
    console.log("end")
    if(newsstate.newsend)
    {
      console.log("h")
      handleClick()
    }
    else{
      page+=5;
      console.log("page number "+ page)
     
      newsDispatch(fetchNextNews("sports",page))
    }


  })
 
    useEffect(()=>{
      
        newsDispatch(fetchNews("sports",page))
    },[])

 
  
 return newsstate.newsloading?(<h1>loading</h1>):newsstate.newserr?(<h1>"error"</h1>):(
   <React.Fragment >
     
    
     
     {console.log(newsstate.newsdata)} {newsstate.newsdata.map(resultNews=>(
 
  
 
<Container maxWidth="sm">
<Card  className={classes.card} mb={5}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={resultNews.title}
          height="140"
          image={resultNews.urlToImage==null?"https://image.shutterstock.com/image-vector/image-not-available-icon-260nw-1036295239.jpg":resultNews.urlToImage}
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
 

))}

<Snackbar
        className={classes.sn}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        message="News end!!"
      >
        
        
      </Snackbar>
     

</React.Fragment>

   
  

)


    
        
    

}

export default AllNews;