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

    componentDidMount() {
        const allComments = JSON.parse(localStorage.getItem('allComments'));
        const currentTimeStamp = JSON.parse(localStorage.getItem('currentTimeStamp'));
        this.setState({
          commentArray: allComments ? allComments : this.props.commentArray,
          timeStamp: currentTimeStamp ? currentTimeStamp : this.props.timeStamp
        });
      }
    
      componentDidUpdate() {
        localStorage.setItem('allComments', JSON.stringify(this.state.commentArray));
        localStorage.setItem('currentTimeStamp', JSON.stringify(this.state.timeStamp));
      }


    addComment = (e) => {
        e.preventDefault();
        if (this.state.input) {
            // Classic Date settings
            const options = {weekday: "short", month: "long", year: "numeric", hour: "numeric", minute: "numeric"};
            const date = new Date().toLocaleDateString("en-US", options);

            const newComment = {
                id: Date.now(),
                username: "vgstories",
                text: this.state.input
            }
            console.log(this.state.id);
            this.props.addComment(this.state.id, newComment, date)
        }
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