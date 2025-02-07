import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostContainer.scss';


const PostContainer = (props) => {
    return (
        <>
            {props.postArr.map(post => {
                return <Post 
                            post={post} 
                            addComment={props.addComment}
                            key={post.id} 
                            toggleLike={props.toggleLike} 
                            delete={props.deleteComment}
                        />
            })}
        </>
    );
}

PostContainer.propTypes = {
    postArr: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        like: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array,
    }))
}

export default PostContainer;