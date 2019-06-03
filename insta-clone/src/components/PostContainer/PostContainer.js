import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {

    const imageAlt = props.post.comments[0].username === props.post.username ?
        props.post.comments[0].text
        :
        `${props.post.username}'s post`;

    return(
        <div className="full-post">
            <header>
                <img src={props.post.thumbnailUrl} alt={props.post.username} />
                <h3>{props.post.username}</h3>
            </header>
            <div className="img-container">
                <img src={props.post.imageUrl} alt={imageAlt} />
            </div>
            <div className="img-footer">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <p className="likes">{props.post.likes} likes</p>
            </div>
            <CommentSection 
                commentArray={props.post.comments} 
                timestamp={props.post.timestamp}
            />
        </div>
    );
}

export default PostContainer;