import React, { useEffect, useState } from 'react';
import NewsStacture from '../NewsStacture/NewsStacture';

const News = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div style={{backgroundColor:'#ccd8ff'}} >
           
            {
                post.map(post => <NewsStacture post={post}></NewsStacture>)
            }
            
        </div>
    );
};

export default News;
