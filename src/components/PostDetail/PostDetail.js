import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css'
import Comment from '../Comment/Comment';
import './PostDetail.css'

const PostDetail = () => {
    const {postDetailId} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts/${postDetailId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    const [comments, setComments] = useState([])
    useEffect(() => {
        let urlC = `https://jsonplaceholder.typicode.com/comments?postId=${postDetailId}`;
        fetch(urlC)
        .then(res => res.json())
        .then(cm => setComments(cm))
    },[])

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=6`)
        .then(res => res.json())
        .then(data => setUser(data.results))
    },[]);

        const users = user.slice(0, comments.length)
        // console.log(users)


    return (
        <div className="postDetail">
            <div>
                <h4>Title: {post.title} </h4>
                <p>{post.body}.</p>
            </div>
                <p>Comment:</p>

                {
                    comments.map((cm , index) => {
                        const user = users[index]
                        return(
                            <Comment comments={cm} user={user} key={index} ></Comment>
                        )
                    })
                }
        </div>
    );
};

export default PostDetail;