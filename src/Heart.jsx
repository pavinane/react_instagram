import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Like from "./Icon";
import Comment from "./Comment";
import Share from "./Share";
import Bookmark from "./Bookmark";
import "./heart.scss";

const Icon = () => (
  <div className="icon-clck">
    <div className="ic-1">
      <Like />
      <Comment />
      <Share />
    </div>
    <div className="ic-2">
      <Bookmark />
    </div>
  </div>
);
export default Icon;
