import React from 'react';
import Title from './Title';
import Post from './Post';

import './App.scss';

const App = () => (
  <div className="app">
    <div className="upload">
      <Title />
      <Post />
    </div>
  </div>
);

export default App;
