import React from 'react';
import './footer.scss';

class Foot extends React.Component {
  render() {
    return (
      <div className="g-3">
        <div className="tech">
          <ul>
            <li>about us</li>
            <li>support</li>
            <li>press</li>
            <li>api</li>
            <li>jobs</li>
            <li>privacy</li>
            <li>terms</li>
            <li>directory</li>
            <li>profile</li>
            <li>hashtag</li>
            <li> language</li>
          </ul>
        </div>
        <div className="indus">
          <h2>© 2019 INSTAGRAM</h2>
        </div>
      </div>
    );
  }
}

export default Foot;
