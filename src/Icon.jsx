import React from "react";

class Like extends React.Component {
  state = {
    showIcon: false
  };

  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="like">
        {/* {showIcon ? "fas fa-heart" : "far fa-heart"} */}
        <i
          className={showIcon ? "fas fa-heart" : "far fa-heart"}
          onClick={this.showIc}
        ></i>
      </div>
    );
  }
}

export default Like;
