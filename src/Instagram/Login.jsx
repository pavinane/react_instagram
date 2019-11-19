import React from "react";
import "./login.scss";
import mbimg from "./LoginImages/mob-img.png";
import scrnsht from "./LoginImages/scrnsht-img.jpeg";
import instlogo from "./ImagesInsta/instalogo.png";
import apple from "./LoginImages/apple-logo.png";
import google from "./LoginImages/ggle-logo.png";
import Footer from "./Footer";
class Login extends React.Component {
  render() {
    return (
      <div className="log-pag">
        <div className="log">
          <div className="mobile-image">
            <div className="im-1">
              <img src={mbimg} alt="" />
            </div>
            <div className="im-2">
              <img src={scrnsht} alt="" />
            </div>
          </div>
          <div className="login-form">
            <div className="form-head">
              <div className="fr-hed">
                <img src={instlogo} alt="" />
                <h2>Sign up to see photos and vedios from your friends.</h2>
                <button type="button">
                  <i className="fab fa-facebook-square" />
                  Log in with Facebook
                </button>
                <span>or</span>

                <FormValidation />
                <p>
                  By signing up, you agree to our <b>Terms , Data Policy</b> and{" "}
                  <b>Cookies Policy .</b>
                </p>
              </div>
            </div>
            <div className="account">
              <p>
                Have a account? <span>Log in</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="app-down">
          <p>Get the app</p>
          <div className="app-img">
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
        <Footer />;
      </div>
    );
  }
}

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: "",
  number: "",
  numberError: ""
};

class FormValidation extends React.Component {
  state = initialState;

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";
    let numberError = "";

    const { name, password, number } = this.state;
    if (!name) {
      nameError = "Name cannot be Blank";
    }

    // if (!email.includes("@")) {
    //   emailError = "Invalid Email,Enter valid Email";
    // }

    if (password.length <= 5) {
      passwordError = "Password should be between 5 and 10 characters";
    }
    if (number.length < 11) {
      numberError = "Password should be between 5 and 10 characters";
    }
    if (nameError || passwordError || numberError) {
      this.setState({ nameError, passwordError, numberError });
      return false;
    }
    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };
  render() {
    const {
      name,
      password,
      nameError,
      passwordError,
      number,
      numberError
    } = this.state;
    return (
      <div className="valid">
        <form onSubmit={this.handleSubmit}>
          <input
            value={number}
            type="tel"
            id="phone"
            name="number"
            required
            onChange={this.handleChange}
            placeholder="mobile number or email"
          />
          <p style={{ color: "red" }}>{numberError}</p>
          {/* <p style={{ color: "red" }}>{emailError}</p> */}
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{nameError}</p>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="User Name"
            onChange={this.handleChange}
          />

          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{passwordError}</p>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Login;
