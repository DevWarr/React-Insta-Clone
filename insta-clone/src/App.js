import React from 'react';
import dummyData from './components/data/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(post => <PostContainer post={post} key={post.id} />)}
    </div>
  );
}

export default App;
