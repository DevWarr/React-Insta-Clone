import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/authenticate/withAuthenticate';
import './App.scss';

const App = () => {

  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

    return (
      <ComponentFromWithAuthenticate />
    );
}

export default App;
