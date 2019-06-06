import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { PostContainer, Header, UserThumbnail, Username, ImageContainer, Image, Footer, Likes } from './PostStyles';

const Post = (props) => {

    const imageAlt = props.post.comments[0].username === props.post.username ?
        props.post.comments[0].text
        :
        `${props.post.username}'s post`;

    return(
        <PostContainer>
            <Header>
                <UserThumbnail src={props.post.thumbnailUrl} alt={props.post.username} />
                <Username>{props.post.username}</Username>
            </Header>
            <ImageContainer>
                <Image src={props.post.imageUrl} alt={imageAlt} />
            </ImageContainer>
            <Footer>
                <i 
                    className={props.post.heart}
                    id={props.post.id} 
                    onClick={props.toggleLike}
                ></i>
                <i className="far fa-comment fa-2x"></i>
                <Likes>{props.post.likes} likes</Likes>
            </Footer>
            <CommentSection 
                commentArray={props.post.comments} 
                addComment={props.addComment}
                timeStamp={props.post.timestamp}
                id={props.post.id}
                delete={props.delete}
            />
        </PostContainer>
    );
}


export default Post;