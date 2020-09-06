import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
   const [post, setPost] = useState([]);
   useEffect(()=> {
       let url = "https://jsonplaceholder.typicode.com/posts";
       fetch(url)
       .then(res => res.json())
       .then(data => setPost(data))
   },[])
    return (
        <div className="post-div">
            {
                post.map(ps => 
                <Post post={ps} key={ps.id}></Post>)
            }
        </div>
    );
};

export default Home;