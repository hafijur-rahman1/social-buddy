import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '1000',
        backgroundColor: '#b3cccc',
    },
    inline: {
        display: 'center',
        
    },
}));



const CommentsDetails = (props) => {
    const { body, name, email } = props.comment;
    const classes = useStyles();
    const [photo, setPhoto] = useState({})

    useEffect(()=>{
        fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-01-20&sortBy=publishedAt&apiKey=868ab8275b2f4bccb18dc4c05267dc09')
        .then(res => res.json())
        .then(data => setPhoto(data))
    },[])
   
    

    return (
        <List className={classes.root}>
            <ListItem >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={photo.urlToImage} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {email}----
                            
              </Typography>
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />




        </List>
       
    );
};

export default CommentsDetails;