import React from "react";

class Comment extends React.Component {
  state = {
    showIcon: false
  };
  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="comment">
        <i
          className={showIcon ? "far fa-comment" : "far fa-comment"}
          onClick={this.showIc}
        ></i>
        {showIcon && <input type="pavi" />}
      </div>
    );
  }
}

export default Comment;
