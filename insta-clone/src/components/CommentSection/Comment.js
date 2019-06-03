import React from 'react';
import PropTypes from 'prop-types'

const Comment = (props) => {
    return (
        <p><span className="username-comment">{props.comment.username} </span>{props.comment.text}</p>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;