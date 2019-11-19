import React from 'react';
import { Link } from 'react-router-dom';
import Navi from './Navi';
import './instagram.scss';
import Leftcard from './Leftcard';
import prfimg from './ImagesInsta/vijay.jpg';
import Post from './Post';

class Title extends React.Component {
  render() {
    return (
      <div className="heading">
        <div className="navi">
          <Navi />
        </div>
        <Contain />
      </div>
    );
  }
}

class Contain extends React.Component {
  render() {
    return (
      <div className="contain">
        <div className="rig">
          <Main />
          <Main />
          <Main />
        </div>
        <div className="l-c">
          <Leftcard />
        </div>
      </div>
    );
  }
}

const Main = () => (
  <div className="right-card">
    <Imp />
    <div className="body">
      <Post />
    </div>
  </div>
);

const Imp = () => (
  <div className="top">
    <div className="profile">
      {/* <i className="far fa-circle" /> */}
      <Link to="/profile">
        <img src={prfimg} alt="" />
      </Link>
    </div>
    <h2>nane pavi </h2>
    <span>...</span>
  </div>
);
export default Title;
