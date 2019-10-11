import React from "react";
import "./icon.scss";

class Bookmark extends React.Component {
  state = {
    showIcon: false
  };

  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="bookmak">
        <i
          className={showIcon ? "fas fa-bookmark" : "far fa-bookmark"}
          onClick={this.showIc}
        ></i>
      </div>
    );
  }
}

export default Bookmark;
