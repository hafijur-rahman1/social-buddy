import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {newsId} = useParams();
    const [news, setNews] = useState({})
    console.log(news);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${newsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setNews(data))
    }, [])
    
    return (
        <div style={{textAlign:'start',marginLeft: '200px'}}>
            <h1>This news id is:{newsId} </h1>
            <h3>Title: {news.title}</h3>
            <h3>Body: {news.body}</h3>
            
        </div>
    );
};

export default Details;