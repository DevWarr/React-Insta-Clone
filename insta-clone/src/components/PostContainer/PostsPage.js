import React from 'react';
import dummyData from '../data/dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import { App, Spacer } from './PostStyles';

class PostsPage extends React.Component {
    constructor () {
      super();
      this.state = {
        data: [],
        search: ''
      }
    }
  
    // Whenever we load the page,
    // Right after everything is loaded, do this:
    componentDidMount() {

      // Get some data from localStorage.
      const postArray = JSON.parse(localStorage.getItem('postArray'));

      // Data exists? Put it in our state.
      // Data doesn't exist? use our dummy-data instead
      this.setState({
        data: postArray ? postArray : dummyData
      });
    }
  
    // Any time we update our state, update our local storage with our current state data
    componentDidUpdate() {
      localStorage.setItem('postArray', JSON.stringify(this.state.data));
    }
  
    // When we click a heart, this method is called:
    toggleLike = e => {

      // Go into the state and find which object in the array matches our target
      // ie: Which post are we actually liking?
      const targetPostIndex = this.state.data.findIndex(post => {
        return post.id === e.target.id
      })
      if (targetPostIndex === -1) {console.log('error, could not find post'); return}
  
      // After error checking, we assign some initial values:
      const newData = this.state.data;
      const gray = "post far fa-heart fa-2x"
      const red = "post fas fa-heart fa-2x"
  
      // If our heart WAS gray, set it to red and add a like
      if(newData[targetPostIndex].heart === gray) {
        newData[targetPostIndex].heart = red;
        newData[targetPostIndex].likes++;
        this.setState({
          data: newData
        });

      // Otherwise(if it was red), set it to gray and decrease the like total
      } else {
        newData[targetPostIndex].heart = gray;
        newData[targetPostIndex].likes--;
        this.setState({
          data: newData
        });
      }
    }
  
    /**Coming from CommentSection.js(look there for more info)
     * We took the entire trek here, and here's the connection:
     * 
     * PostsPage.js         types "addComment={this.addCommentToArray}"   to PostContainer.js
     *   PostContainer.js   types "addComment={props.addComment}"         to Post.js
     *     Post.js          types "addComment={props.addComment}"         to CommentSection.js
     *       Comment Section calls this.props.addComment() inside the addComment() method
     * 
     * Basically, we just played a huge game of telephone by passing the same prop down and down...
     * Eventually, when CommentSection.js calls the function, we come back up here!
     * Now that we're here, we have some data that we've been given:
     *  - a post id, a comment object, and a timestamp
     * This method finds the post that matches our post id(so it knows which post we actually commented on)
     * and then adds our comment and timestamp to it.
     * 
     * Convoluted? Maybe.
     * But this is the best way I know of to pass arguments up to a parent component.
     * And, it works '' '
     */
    addCommentToArray = (id, comment, timeStamp) => {

      // Go into the state and find which object in the array matches our target
      // ie: Which post are we adding a comment to?
      // tpi = targetPostIndex
      const tpi = this.state.data.findIndex(post => {
        return post.id === id
      })
      if (tpi === -1) {console.log('error, invalid post id'); return}
  
      // Create a data copy and add in our comment and timestamp
      const newData = this.state.data;
      newData[tpi].timestamp = timeStamp;
      newData[tpi].comments.push(comment)
      console.log(newData);
  
      // Update state with our new Data
      this.setState({
        data: newData
      });
    }
    
    /**Coming from CommentSection.js(look there for more info)
     * We took the entire trek here! ...check the above method for the connection. I'm lazy.
     * 
     * Basically, CommentSection.js gave us the post id and comment id so we can use them here.
     * Now that we have them, we use them to:
     * - Find the post with the matching postId
     * - Find the comment within that post with the matching commentId
     * - Remove that comment. Hoo rah.
     */
    deleteComment = (postId, commentId) => {

      // Go into the state and find which object in the array matches our target
      // ie: Which post are we removing a comment from?
      // tpi = targetPostIndex
      const tpi = this.state.data.findIndex(post => {
        return post.id === postId
      })
      if (tpi === -1) {console.log('error, invalid post id'); return}
  
      // Create a data copy
      const newData = this.state.data;

      // Find the index of the comment we want to remove
      const deleteMe = newData[tpi].comments.findIndex(comment => comment.id === commentId);

      // Splice it out of our data
      newData[tpi].comments.splice(deleteMe, 1)

      // Update state with our new Data
      this.setState({
        data: newData
      });
  
    }
  
    // Same as handleChanges()
    search = e => {
      this.setState({
        search: e.target.value
      })
    }
  
  
    render() {
      return (
        <App>
          <SearchBar 
            search={this.search}
          />
          <Spacer space="100px" />
          <PostContainer 
            addComment={this.addCommentToArray}
            deleteComment={this.deleteComment}
            postArr={this.state.data.filter(post => post.username.includes(this.state.search))} 
            toggleLike={this.toggleLike} 
          />
        </App>
      );
    }
  }
  
  export default PostsPage;
  