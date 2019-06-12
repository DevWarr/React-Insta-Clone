import React from 'react';
import Comment from './Comment';
// import './CommentSection.scss';
import { TimeStamp, Form, Input, Button } from './CommentStyles';


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: "",
            commentArray: props.commentArray,
            timeStamp: props.timeStamp,
            id: props.id,
        }
    }


    // When we load the page, find the username from storage and set it to our state.
    // This will tell us which user is commenting when we add a new comment.
    componentDidMount() {
        const loginUser = localStorage.getItem('username');
        this.setState({
            username: loginUser ? loginUser : "vgstories"
        });
    }

    /**When we add a new comment on the webpage using the form, this function is called.
     * OUR GOAL: To show this comment on the page AND to make sure it is stored in the localStorage.
     * In order to properly store it in localStorage, it must be saved in the MAIN data.
     * 
     * Where's the main data?
     * ...It's all the way in PostsPage.js. Crikey!
     * 
     * Tell you what we'll do:
     *  - Here, we'll create our new comment as an obj.
     *  - We'll also update the timeStamp so we know when we last commented.
     *  - Then, we'll pass these bits of information all the way up to PostsPage.js,
     *  - And there, we'll add it into our main data.
     * 
     * The hard part to follow is all of the `props.addComment` bits.
     * In order to get this data to PostsPage.js, we need to pass it back up as a prop.
     * See addCommentToArray() inside PostsPage.js for more info.
     */
    addComment = (e) => {
        e.preventDefault();
        if (this.state.input) {

            // Classic Date settings
            const options = {day: "2-digit", month: "long", year: "numeric", hour: "numeric", minute: "numeric", seconds: "numeric"};
            const date = new Date().toLocaleDateString("en-US", options);

            //Create a new comment object with a unique id, the username, and the comment text
            const newComment = {
                id: Date.now(),
                username: this.state.username,
                text: this.state.input
            }

            // Call a function within a parent component with these arguments:
            // - Our post id, our new comment object, and our date(new timestamp)
            this.props.addComment(this.state.id, newComment, date)

            // Update our state to reset the input and display the proper timestamp
            this.setState({
                input: '',
                timeStamp: date
            })
        }
    }

    /**Coming from Comment.js(look there for more info)
     * This function receives the comment object we wish to delete.
     * What does the code need in order to know what comment to delete?
     * It needs the id of the post, and the id of the comment!
     * That way, it will know WHICH comment from WHICH post needs to be bangaranged (removed).
     * (See deleteComment() inside PostsPage.js for more info)
     */
    delete = (comment) => {

        // Check if the comment we want to delete is the user's original comment,
        // ie check if the comment is the first in the array.
        // If it is... we can't delete it! We must protect the original users content!
        const commentIndex = this.state.commentArray.findIndex(obj => obj.id === comment.id)
        if (commentIndex === 0) {console.log("cannot delete original user comment"); return}

        // Otherwise, we call a parent function with these arguments:
        // - Our post id, and our comment id.
        this.props.delete(this.props.id, comment.id)
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.commentArray.map(comment => {
                    return <Comment 
                        comment={comment} 
                        key={comment.id} 
                        delete={this.delete} 
                    />
                })}
                <TimeStamp> {this.state.timeStamp}</TimeStamp>
                <Form onSubmit={this.addComment}>
                    <Input 
                        type="text" 
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                    <Button 
                        commenting={this.state.input}
                        type="Submit"
                    >Post</Button>
                </Form>
            </div>
        );
    }
}

export default CommentSection;