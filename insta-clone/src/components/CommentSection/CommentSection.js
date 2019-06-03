import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';


class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: ""
        }
        this.props = props;
    }

    nothing = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="comment-section">
                {this.props.commentArray.map(comment => {
                    return <Comment comment={comment} key={comment.id}/>
                })}
                <p className="time-stamp"> {this.props.timeStamp}</p>
                <form>
                    <input type="text" placeholder="Add a comment..." />
                    <button onClick={this.nothing} >Post</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;