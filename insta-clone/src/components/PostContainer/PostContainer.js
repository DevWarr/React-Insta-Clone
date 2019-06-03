import React from 'react';
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const PostContainer = (props) => {

    const imageAlt = props.post.comments[0].username === props.post.username ?
        props.post.comments[0].text
        :
        `${props.post.username}'s post`;

    return(
        <div className="full-post">
            <header>
                <img className="user-thumbnail" src={props.post.thumbnailUrl} alt={props.post.username} />
                <h3>{props.post.username}</h3>
            </header>
            <div className="img-container">
                <img src={props.post.imageUrl} alt={imageAlt} />
            </div>
            <div className="img-footer">
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
                <p className="likes">{props.post.likes} likes</p>
            </div>
            <CommentSection 
                commentArray={props.post.comments} 
                timeStamp={props.post.timestamp}
            />
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        like: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array,
    })
}

export default PostContainer;