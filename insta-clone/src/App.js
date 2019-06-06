import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import withAuthenticate from './components/authenticate/withAuthenticate';
import './App.scss';

const App = () => {

  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login, Register);

    return (
      <ComponentFromWithAuthenticate />
    );
}

export default App;
