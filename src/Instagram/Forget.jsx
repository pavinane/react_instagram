import React from "react";
// import Navi from "./Navi";
import { Link } from "react-router-dom";
import logo from "./ImagesInsta/instalogo.png";
import Footer from "./Footer";
import "./forget.scss";

class Forget extends React.Component {
  render() {
    return (
      <div className="forget">
        <div className="f-ic">
          <div className="forget-icons">
            <Link to="/">
              <svg
                aria-label="Instagram"
                className="_8-yf5 "
                fill="#262626"
                height="30"
                viewBox="0 0 48 48"
                width="30"
              >
                <path d="M13.86.13A17 17 0 008 1.26 11 11 0 003.8 4 12.22 12.22 0 001 8.28 18 18 0 00-.11 14.1c-.13 2.55-.13 3.38-.13 9.9s0 7.32.13 9.9A18 18 0 001 39.72 11.43 11.43 0 003.8 44 12.17 12.17 0 008 46.74a17.75 17.75 0 005.82 1.13c2.55.13 3.38.13 9.9.13s7.32 0 9.9-.13a17.82 17.82 0 005.83-1.13A11.4 11.4 0 0043.72 44a11.94 11.94 0 002.78-4.24 17.7 17.7 0 001.13-5.82c.13-2.55.13-3.38.13-9.9s0-7.32-.13-9.9a17 17 0 00-1.13-5.86A11.31 11.31 0 0043.72 4a12.13 12.13 0 00-4.23-2.78A17.82 17.82 0 0033.66.13C31.11 0 30.28 0 23.76 0s-7.31 0-9.9.13m.2 43.37a13.17 13.17 0 01-4.47-.83 7.25 7.25 0 01-2.74-1.79 7.25 7.25 0 01-1.79-2.74 13.23 13.23 0 01-.83-4.47c-.1-2.52-.13-3.28-.13-9.7s0-7.15.13-9.7a12.78 12.78 0 01.83-4.44 7.37 7.37 0 011.79-2.75A7.35 7.35 0 019.59 5.3a13.17 13.17 0 014.47-.83c2.52-.1 3.28-.13 9.7-.13s7.15 0 9.7.13a12.78 12.78 0 014.44.83 7.82 7.82 0 014.53 4.53 13.12 13.12 0 01.83 4.44c.13 2.51.13 3.27.13 9.7s0 7.15-.13 9.7a13.23 13.23 0 01-.83 4.47 7.9 7.9 0 01-4.53 4.53 13 13 0 01-4.44.83c-2.51.1-3.28.13-9.7.13s-7.15 0-9.7-.13m19.63-32.34a2.88 2.88 0 102.88-2.88 2.89 2.89 0 00-2.88 2.88M11.45 24a12.32 12.32 0 1012.31-12.35A12.33 12.33 0 0011.45 24m4.33 0a8 8 0 118 8 8 8 0 01-8-8" />
              </svg>
            </Link>
            <p>|</p>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="f-p">
          <div className="lock">
            <div className="cir-lo">
              <i className="fas fa-lock" />
            </div>
            <h2>Troble logging in?</h2>
            <p>
              Enter your username or email and we'll send you a link to get back
              into your account.
            </p>
            <div className="name-cd">
              <p>Email.Phone,or Username97</p>
              <h2>nanepavi97</h2>
            </div>
            <button type="button">Send Login Link</button>
            <span>OR</span>
          </div>
          <div className="nm-cd1">
            <h2>create new account</h2>
            <Link to="/">
              <button type="button">back to login</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Forget;
