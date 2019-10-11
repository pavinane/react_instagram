import React from 'react';
import './title.scss';

class Title extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="top">
          <div className="profile">
            {/* <i className="far fa-circle" /> */}
            <img src="https://placeimg.com/50/50/place" alt="" />
          </div>
          <h2>nane pavi</h2>
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

export default Title;
