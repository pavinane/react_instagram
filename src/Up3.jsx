import React from "react";
import "./up3.scss";
import Heart from "./Heart";

// const Short = ({ p }) => (
//   <div className="short">
//     {p.map((s) => (
//       <div className="sh-txt">
//         <p>{s.para}</p>
//         <b>{s.bold}</b>
//         <i>{s.italic}</i>
//         <small>{s.sm}</small>
//       </div>
//     ))}
//   </div>
// );

const Comnt = () => (
  <div className="comnt-text">
    <div className="logo">
      <Heart />
    </div>
    <div className="content">
      <div classNames="num-lk">
        <p>
          <b>4,740 likes</b>
        </p>
      </div>
      <div className="text">
        <p>
          {" "}
          <b>mokkaapost </b>
          <i>Aga aga aaga...</i>
          😂 😂
          <span>more</span>
        </p>
        <small>View all 21 comments</small>
      </div>
      <div className="tag-name">
        <div className="1">
          <p>
            <b>pavinane</b>
            <i> @nane </i>
            😍😍😍
            <small />
          </p>
        </div>
        <div className="2">
          <p>
            <b>iron man</b>
            {/* <i> @nane </i> */}
            ❤️ Watkin kdsaccoccie I've seen that waterfall it's really cool!!
          </p>
        </div>
      </div>
    </div>
    <div className="comnt-section">
      <input type="text" placeholder="Add a comment ..." />
    </div>
  </div>
);

export default Comnt;
