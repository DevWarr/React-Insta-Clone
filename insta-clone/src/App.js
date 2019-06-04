import React from 'react';
import dummyData from './components/data/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
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

    if(e.target.className === gray) {
      e.target.className = red;
      newData[targetPostIndex].likes ++
      this.setState({
        data: newData
      });
    } else {
      e.target.className = gray;
      newData[targetPostIndex].likes --
      this.setState({
        data: newData
      });
    }
  }


  search = e => {
    const filteredData = this.state.data;

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
          postArr={this.state.data} 
          toggleLike={this.toggleLike} 
        />
      </div>
    );
  }
}

export default App;
