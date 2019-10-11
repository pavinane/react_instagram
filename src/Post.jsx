import React from 'react';
import Like from './Icon';
import Comment from './Comment';
import Share from './Share';
import Bookmark from './Bookmark';
import './post.scss';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <img src="https://placeimg.com/500/400/place" alt="" />
      </div>
    );
  }
}

class PostImage extends React.Component {
  render() {
    return (
      <div className="post-image">
        <div className="post">
          <Post />
        </div>
        <div className="sym">
          <div className="three">
            <Like />
            <Comment />
            <Share />
          </div>
          <div className="book">
            <Bookmark />
          </div>
        </div>
      </div>
    );
  }
}
export default PostImage;
