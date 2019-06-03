import React from 'react';


const Comment = (props) => {
    return (
        <p><span className="username-comment">{props.comment.username} </span>{props.comment.text}</p>
    );
}

export default Comment;