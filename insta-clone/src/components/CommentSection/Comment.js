import React from 'react';
import PropTypes from 'prop-types'

const Comment = (props) => {

    const deleteComment = () => {
        props.delete(props.comment);
    }

    return (
        <p><span className="username-comment">{props.comment.username} </span>{props.comment.text}<span className="delete" onClick={deleteComment}>Delete</span></p>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;

// <span onClick={this.delete}>Delete</span>