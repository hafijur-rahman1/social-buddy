import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams()
    const [comment, setComment] = useState([]);
    console.log(comment)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h3> comments length: {comment.length}</h3>
            <h4>Name: {comment.name}</h4>
            <p>body: {}</p>
    
            {/* <h5>COmment: {comment.body}</h5> */}
        </div>
    );
};

export default Comments;