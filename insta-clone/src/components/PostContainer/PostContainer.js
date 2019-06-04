import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostContainer.scss';


const PostContainer = (props) => {
    return (
        <div className="full-post">
            {props.postArr.map(post => <Post post={post} key={post.id} />)}
        </div>
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