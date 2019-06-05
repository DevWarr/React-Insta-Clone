import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authenticate/withAuthenticate';
import './App.css';

const App = () => {

  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

    return (
      <ComponentFromWithAuthenticate />
    );
}

export default App;
