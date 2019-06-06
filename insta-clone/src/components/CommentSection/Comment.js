import React from 'react';
import PropTypes from 'prop-types'
import { Username, DeleteComment, CommentContent } from './CommentStyles';

const Comment = (props) => {

    const deleteComment = () => {
        props.delete(props.comment);
    }

    return (
        <CommentContent>
            <Username>{props.comment.username} </Username>
            {props.comment.text}
            <DeleteComment onClick={deleteComment}>Delete</DeleteComment>
        </CommentContent>
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