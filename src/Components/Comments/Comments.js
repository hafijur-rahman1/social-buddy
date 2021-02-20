import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetails from '../ComentsDetails/CommentsDetails';

const Comments = () => {
    const {postId} = useParams()
    const [comment, setComment] = useState([]);
    // console.log(comment)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            {/* <h3> comments length: {comment.length}</h3> */}
           {
               comment.map(comment => <CommentsDetails comment={comment}></CommentsDetails>)
           }
        </div>
    );
};

export default Comments;