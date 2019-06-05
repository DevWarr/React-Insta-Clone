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
            id: props.id,
            commenting: false
        }
    }

    componentDidMount() {
        const loginUser = localStorage.getItem('username');
        this.setState({
            username: loginUser ? loginUser : "vgstories"
        });
    }


    addComment = (e) => {
        e.preventDefault();
        if (this.state.input) {
            // Classic Date settings
            const options = {weekday: "short", month: "long", year: "numeric", hour: "numeric", minute: "numeric"};
            const date = new Date().toLocaleDateString("en-US", options);

            const newComment = {
                id: Date.now(),
                username: this.state.username,
                text: this.state.input
            }
            this.props.addComment(this.state.id, newComment, date)
            this.setState({input: ''})
        }
    }

    delete = (comment) => {
        const commentIndex = this.state.commentArray.findIndex(obj => obj.id === comment.id)
        
        if (commentIndex === 0) {console.log("cannot delete original user comment"); return}
        this.props.delete(this.props.id, comment.id)
    }


    handleChanges = e => {
        e.preventDefault();
        this.setState({
            input: e.target.value,
            commenting: e.target.value === '' ? false : true
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
                <p className="time-stamp"> {this.state.timeStamp}</p>
                <form onSubmit={this.addComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                    <button 
                        className={this.state.commenting ? "commenting" : null}
                        type="Submit"
                    >Post</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;