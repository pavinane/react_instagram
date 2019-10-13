import React from "react";
// import Heart from "./Heart";
import Comnt from "./Up3";
import "./up1.scss";

const Up1 = () => (
  <div className="top">
    <img src="https://placeimg.com/50/50/random" alt="" />
    <h2>pavi nane</h2>
    <i className="fas fa-ellipsis-h" />
  </div>
);

const Up2 = () => (
  <div className="pic-icon">
    <img src="https://placeimg.com/500/500/nature" alt="" />
    <div className="icons">{/* <Heart /> */}</div>
  </div>
);
const Load = () => (
  <div className="box">
    <div className="navi">
      <Up1 />
    </div>
    <div className="navi2">
      <Up2 />
    </div>
    <div className="navi3">
      <Comnt />
    </div>
  </div>
);

export default Load;
