import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const comments= props.comments;
    const users = props.user;
    const {email, body } = comments;
    // console.log(users)

    return (
        
            <div style={{border: "1px solid pink", padding:"10px", borderRadius:"5px", marginTop: "5px"}}>    
                <div className='comment-title'>
                    <img src={users? users.picture.thumbnail: ""} alt=""/>
                    <p style={{color: "blue"}}>
                        {users?users.name.title +" "+ users.name.first + " " +users.name.last :""} :</p>
                </div>
                <p>{body}</p>
            </div>

    );
};

export default Comment;