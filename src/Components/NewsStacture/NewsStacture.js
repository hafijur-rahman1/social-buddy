import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
     marginLeft: 300,
     marginBottom:100,
     padding: 100,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const NewsStacture = (props) => {
    const {id,title,body} = props.post;
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (newsId) => {
      const url = `/news/${id}`;
      history.push(url);
    }

    const commmentHandle = (postId) => {
      const url = `/comment/${id}`;
      history.push(url);
    }

    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
            {body}
            {id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>handleClick(id)} variant="outlined" color="secondary">
          More
        </Button>
        
            <Button onClick={()=> commmentHandle(id)} variant="contained" color="secondary">
              Comment
            </Button>
        
        
      </CardActions>
    </Card>
    );
};

export default NewsStacture;