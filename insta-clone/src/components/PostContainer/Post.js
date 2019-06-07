import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { PostContainer, Header, UserThumbnail, Username, ImageContainer, Image, Footer, Likes } from './PostStyles';

const Post = (props) => {

    /**Too complex?
     * Every image needs an alt.
     * This const tells the code what our alt will be for our main Post image
     * 
     * If the first comment has the same username as the main post,
     *   - alt = the user's comment
     * 
     * If the first comment doesn't have the same username as the main post,
     *   - alt = the username of the post itself
     * 
     * With our dummy data, this will always = the user's comment
     * But, what if we could make a new post? And we didn't want to leave a comment?
     * This is just some extra foolproofing for the hypothetical future.
     */
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
                <i className="post far fa-comment fa-2x"></i>
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