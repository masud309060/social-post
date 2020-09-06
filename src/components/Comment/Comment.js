import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const comments= props.comments;
    const {name, body } = comments;
    let users = props.users;
    // const {thumbnail} = users.picture;
    // console.log(users)
    return (
        <div>          
         <div style={{border: "1px solid pink", padding:"10px", borderRadius:"5px", marginTop: "5px"}}>    
            <p style={{color: "blue"}}>{name}:</p>
            <p>{body}</p>
         </div>
        </div>
    );
};

export default Comment;