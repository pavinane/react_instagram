import React from "react";
import "./App.scss";
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Instagram from "./Instagram/Instagram";
import Profile from "./Instagram/Profile";
import Discover from "./Instagram/Compass";
import Detailpost from "./Instagram/PstCmnt";
import Login from "./Instagram/Login";
import Edit from "./Instagram/Edit";
import IGtv from "./Instagram/Igtv";
import Seeall from "./Instagram/Seeall";
import Forget from "./Instagram/Forget";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/mainpage" component={Instagram} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/igtv" component={Profile} />
            <Route exact path="/profile/saved" component={Profile} />
            <Route exact path="/profile/tagged" component={Profile} />
            <Route exact path="/seeall" component={Seeall} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/detailpost" component={Detailpost} />
            <Route exact path="/" component={Login} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/edit/changepassword" component={Edit} />
            <Route exact path="/edit/appswebsite" component={Edit} />
            <Route exact path="/edit/emailandsms" component={Edit} />
            <Route exact path="/edit/manage contact" component={Edit} />
            <Route exact path="/edit/loginactivity" component={Edit} />
            <Route exact path="/edit/email/instagram" component={Edit} />
            <Route exact path="/edit/privacy/security" component={Edit} />
            <Route exact path="/forget" component={Forget} />
            <Route exact path="/igtv" component={IGtv} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
