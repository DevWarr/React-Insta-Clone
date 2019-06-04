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


  render() {
    return (
      <div className="App">
        <SearchBar />
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
