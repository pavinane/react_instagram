import React from "react";
import shortid from "shortid";
import "./comment.scss";

class CommentForm extends React.Component {
  state = {
    comment: "",
    text: "",
    option: false
  };

  handleChange = e => this.setState({ comment: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.add({
      id: shortid.generate(),
      text: this.state.comment,
      user: this.state.text,
      completed: false
    });
  };
  click = show => {
    this.setState({ text: show });
  };
  render() {
    const { comment, text } = this.state;
    return (
      <div className="comment">
        <div className="option">
          <div className="click">
            <button className="button" onClick={() => this.click("pavi")}>
              pavi
            </button>
            <button className="button" onClick={() => this.click("ashok")}>
              ashok
            </button>
            <button className="button" onClick={() => this.click("chaal")}>
              chaal
            </button>
            <button className="button" onClick={() => this.click("pritam")}>
              pritam
            </button>
          </div>
          <p>{text}</p>
        </div>
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <input
              name="todoText"
              type="text"
              value={comment}
              onChange={this.handleChange}
              placeholder="Enter Todo"
            />
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    );
  }
}

class CommentText extends React.Component {
  state = {
    count: 0,
    showIcon: false
  };
  showIc = () => this.setState(({ showIcon }) => ({ showIcon: !showIcon }));
  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  // decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
  render() {
    const { cmmnt, completeFunc } = this.props;
    const { count, showIcon } = this.state;
    return (
      <>
        <div className="comment-text">
          {cmmnt.id && ( //&& is true condition
            <div className="cmt">
              <div className="tex">
                <p>
                  <span>{cmmnt.user}</span>:{cmmnt.text}
                  <>
                    <div className="share">
                      <i
                        className={showIcon ? "fas fa-heart" : "fas fa-heart"}
                        onClick={this.showIc}
                      ></i>
                      {showIcon && (
                        <div className="option">
                          {cmmnt.completed ? (
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => completeFunc(cmmnt.id)}
                            >
                              &#9825;
                            </span>
                          ) : (
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={this.increment}
                            >
                              &#9825; <p>{count}Likes</p>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                </p>
              </div>
            </div>
          )}
          <Time />
        </div>
      </>
    );
  }
}

class CommentList extends React.Component {
  state = {
    cmmnts: []
    // user: ""
  };

  // setUser = u => {
  //   this.setState(() => ({ user: u }));
  //   console.log(this.state);
  // };

  completeTodo = id => {
    this.setState(({ cmmnts }) => ({
      cmmnts: cmmnts.map(t => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      })
    }));
  };
  addTodo = cmmnt => {
    this.setState(({ cmmnts }) => ({ cmmnts: [cmmnt, ...cmmnts] })); //spred syntax
  };

  render() {
    const { cmmnts } = this.state; // this means destructure
    return (
      <>
        <CommentForm add={this.addTodo} />
        {cmmnts.map(s => (
          <CommentText
            key={s.id}
            cmmnt={s}
            // user={user}
            completeFunc={this.completeTodo}
          />
        ))}
      </>
    );
  }
}
class CommentApp extends React.Component {
  render() {
    return (
      <div className="list">
        <CommentList />
      </div>
    );
  }
}
class Time extends React.Component {
  state = {
    hours: "",
    min: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var hour = new Date().getHours();
    var hours = (hour + 24) % 24;

    var mid = "am";
    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours % 12;
      mid = "pm";
    }
    // var ampm = hours >= 12 ? "PM" : "AM";
    var min = new Date().getMinutes(); //Current Minutes
    this.setState({ hours: hours + ":" + min + mid });
  };

  render() {
    const { hours } = this.state;

    return (
      <div className="time">
        <p>{hours}</p>
      </div>
    );
  }
}

export default CommentApp;
