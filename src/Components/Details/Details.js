import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    const {newsId} = useParams();
    const [news, setNews] = useState({})
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${newsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setNews(data))
    }, [])
    
    return (
        <div style={{textAlign:'start',marginLeft: '200px'}}>
            <p>Your search Result </p>

            <h1> {news.title}</h1>
            <br/>
            <h3> {news.body}</h3>
            
        </div>
    );
};

export default Details;