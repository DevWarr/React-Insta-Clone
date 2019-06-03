import React from 'react';
import Comment from './Comment';


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
            <div>
                {this.props.commentArray.map(comment => {
                    return <Comment comment={comment} />
                })}
                <form>
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;