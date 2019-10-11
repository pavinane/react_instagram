import React from "react";

class Share extends React.Component {
  state = {
    showIcon: false
  };
  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));

  render() {
    const { showIcon } = this.state;
    return (
      <div className="share">
        <i
          className={
            showIcon ? "fab fa-telegram-plane" : "fab fa-telegram-plane"
          }
          onClick={this.showIc}
        ></i>
        {showIcon && (
          <div className="option">
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-facebook-f"></i>
          </div>
        )}
      </div>
    );
  }
}

export default Share;
