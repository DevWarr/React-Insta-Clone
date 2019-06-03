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

    render() {
        return (
            <div className="comment-section">
                {this.props.commentArray.map(comment => {
                    return <Comment comment={comment} />
                })}
                <p className="time-stamp"> {this.props.timeStamp}</p>
                <form>
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;