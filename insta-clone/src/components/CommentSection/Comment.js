import React from 'react';
import PropTypes from 'prop-types'
import { Username, DeleteComment, CommentContent } from './CommentStyles';

const Comment = (props) => {


    /**When we click 'delete' on a comment,
     * This function simply calls another function with our clicked comment object as an argument.
     * delete is a property passed down from a parent-
     *   - refer to CommentSection.js for more info
     */
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