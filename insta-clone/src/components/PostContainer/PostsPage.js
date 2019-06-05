import React from 'react';
import dummyData from '../data/dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
    constructor () {
      super();
      this.state = {
        data: [],
        search: ''
      }
    }
  
    componentDidMount() {
      const postArray = JSON.parse(localStorage.getItem('postArray'));
      this.setState({
        data: postArray ? postArray : dummyData
      });
    }
  
    componentDidUpdate() {
      localStorage.setItem('postArray', JSON.stringify(this.state.data));
    }
  
  
    toggleLike = e => {
      // Go into the state and find which object in the array matches our target
      // ie: Which post are we actually liking?
      const targetPostIndex = this.state.data.findIndex(post => {
        return post.id === e.target.id
      })
      if (targetPostIndex === -1) {console.log('error, invalid post id'); return}
  
      // After error checking, we assign some initial values:
      const newData = this.state.data;
      const gray = "far fa-heart fa-2x"
      const red = "fas fa-heart fa-2x"
  
      if(newData[targetPostIndex].heart === gray) {
        newData[targetPostIndex].heart = red;
        newData[targetPostIndex].likes++;
        this.setState({
          data: newData
        });
      } else {
        newData[targetPostIndex].heart = gray;
        newData[targetPostIndex].likes--;
        this.setState({
          data: newData
        });
      }
    }
  
    addCommentToArray = (id, comment, timeStamp) => {
      // Go into the state and find which object in the array matches our target
      // ie: Which post are we actually liking?
      // tpi = targetPostIndex
      const tpi = this.state.data.findIndex(post => {
        return post.id === id
      })
      if (tpi === -1) {console.log('error, invalid post id'); return}
  
      // Update our comment array and timestamp
      const newData = this.state.data;
      newData[tpi].timestamp = timeStamp;
      newData[tpi].comments.push(comment)
      console.log(newData);
  
      this.setState({
        data: newData
      });
    }
  
    deleteComment = (postId, commentId) => {
      // Go into the state and find which object in the array matches our target
      // ie: Which post are we actually liking?
      // tpi = targetPostIndex
      const tpi = this.state.data.findIndex(post => {
        return post.id === postId
      })
      if (tpi === -1) {console.log('error, invalid post id'); return}
  
      // Update our comment array
      const newData = this.state.data;
      const deleteMe = newData[tpi].comments.findIndex(comment => comment.id === commentId);
      newData[tpi].comments.splice(deleteMe, 1)
      this.setState({
        data: newData
      });
  
    }
  
  
    search = e => {
      this.setState({
        search: e.target.value
      })
    }
  
  
    render() {
      console.log(this.state.data);
      return (
        <div className="App">
          <SearchBar 
            search={this.search}
          />
          <div className="spacer" />
          <PostContainer 
            addComment={this.addCommentToArray}
            deleteComment={this.deleteComment}
            postArr={this.state.data.filter(post => post.username.includes(this.state.search))} 
            toggleLike={this.toggleLike} 
          />
        </div>
      );
    }
  }
  
  export default PostsPage;
  