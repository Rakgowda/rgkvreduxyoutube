import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
u:{
position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "pointer-events": "none"
}
  }));
 
const Mmenu=(props) =>{
    
    const classes = useStyles();
    return (

     
        <Card className="mb-4">
        <CardActionArea >
        <CardMedia
          className={classes.media}
          
        >
<iframe id="vid" src={props.videolink} className={classes.u} style={{height:"500px",width:"500px"}} allowFullScreen>

         </iframe>
</CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titile}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="secondary">
           
            <a href={props.youtubelink} style={{textDecoration:"none",color:"red"}}>Youtube link</a>
          </Button>
        </CardActions>
        </Card>
    )
}
export default Mmenu;
