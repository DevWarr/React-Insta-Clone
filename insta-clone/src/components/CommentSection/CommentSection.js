import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: "",
            commentArray: props.commentArray,
            timeStamp: props.timeStamp,
            id: props.id
        }
    }

    addComment = e => {
        e.preventDefault();
        if (this.state.input === "") {return}
        const newComment = {
            id: `${this.state.commentArray.length + 1}`,
            username: "vgstories",
            text: this.state.input
        }
        this.setState(prevState => {
            return {
                input: "",
                commentArray: [...prevState.commentArray, newComment],
                timeStamp: new Date()
        }})
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.commentArray.map(comment => {
                    return <Comment comment={comment} key={comment.id}/>
                })}
                <p className="time-stamp"> {this.state.timeStamp}</p>
                <form onSubmit={this.addComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                    <button type="Submit">Post</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;