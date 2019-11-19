import React from "react";
import Navi from "./Navi";
import "./compass.scss";
import { Link } from "react-router-dom";
import pic1 from "./ImagesInsta/ex1.jpg";
import pic2 from "./ImagesInsta/ex2.jpg";
import pic3 from "./ImagesInsta/ex3.jpg";
import pic4 from "./ImagesInsta/ex4.jpg";
import pic5 from "./ImagesInsta/ex5.jpg";
import pic6 from "./ImagesInsta/ex6.jpg";
import pic7 from "./ImagesInsta/ex7.jpg";
import pic8 from "./ImagesInsta/ex8.jpg";
import pic9 from "./ImagesInsta/ex9.jpg";
import pic10 from "./ImagesInsta/ex10.jpg";
import pic11 from "./ImagesInsta/ex11.jpg";
import pic12 from "./ImagesInsta/ex12.jpg";
import pic13 from "./ImagesInsta/ex13.jpg";
import pic14 from "./ImagesInsta/ex14.jpg";
import pic15 from "./ImagesInsta/ex15.jpg";
import pic16 from "./ImagesInsta/ex16.jpg";
import pic17 from "./ImagesInsta/ex17.jpg";
import pic18 from "./ImagesInsta/ex18.jpg";
import pic19 from "./ImagesInsta/ex19.jpg";
import pic20 from "./ImagesInsta/ex20.jpg";
import pic21 from "./ImagesInsta/ex21.jpg";
import dp1 from "./ImagesInsta/dp1.jpg";
import dp2 from "./ImagesInsta/dp2.jpg";
import dp3 from "./ImagesInsta/dp3.jpg";
import dp4 from "./ImagesInsta/dp4.jpg";
import dp5 from "./ImagesInsta/dp5.jpg";
import Footer from "./Footer";

class compass extends React.Component {
  render() {
    return (
      <div className="com">
        <div className="cp-card">
          <Navi />
        </div>
        <div className="dec-pep">
          <div className="dp-card">
            <div className="dsc-ppl">
              <h4>discover people</h4>
            </div>
            <div className="S-A">
              <Link to="/Seeall">
                <h4>see all</h4>
              </Link>
            </div>
          </div>
          <div className="dp-grid">
            <GDP
              dp={[
                {
                  img: dp1,
                  n: "r_c_.edits",
                  p: "Followed by bis_memes + 1 more",
                  f: "follow",
                },
                {
                  img: dp2,
                  n: "anu21073",
                  p: "New to Instagram",
                  f: "follow",
                },
                {
                  img: dp3,
                  n: "virat1377",
                  p: "Followed by prabha.smarty + 13…",
                  f: "follow",
                },
                {
                  img: dp4,
                  n: "saran_maestro",
                  p: "Follows you",
                  f: "follow",
                },
                {
                  img: dp5,
                  n: "devilseid",
                  p: "New to Instagram",
                  f: "follow",
                },
              ]}
            />
          </div>
        </div>
        <Dpic />
        <Footer />
      </div>
    );
  }
}
const GDP = ({ dp }) => (
  <div className="dpg-names">
    {dp.map((dpg) => (
      <div className="dp-cd">
        <img src={dpg.img} alt="" />
        <h2>{dpg.n}</h2>
        <p>{dpg.p}</p>
        <button type="button">{dpg.f}</button>
      </div>
    ))}
  </div>
);

class Dpic extends React.Component {
  render() {
    return (
      <div className="explore">
        <h4>explore</h4>
        <Pict
          pi={[
            {
              img: pic1,
              icon: "fa fa-heart",
              n1: "21",
              icon1: "fa fa-comment",
              n2: "15",
            },
            {
              img: pic2,
              icon: "fa fa-heart",
              n1: "28",
              icon1: "fa fa-comment",
              n2: "0",
            },
            {
              img: pic3,
              icon: "fa fa-heart",
              n1: "21",
              icon1: "fa fa-comment",
              n2: "15",
            },
            {
              img: pic4,
              icon: "fa fa-heart",
              n1: "38",
              icon1: "fa fa-comment",
              n2: "0",
            },
            {
              img: pic5,
              icon: "fa fa-heart",
              n1: "45",
              icon1: "fa fa-comment",
              n2: "12",
            },
            {
              img: pic6,
              icon: "fa fa-heart",
              n1: "52",
              icon1: "fa fa-comment",
              n2: "1",
            },
            {
              img: pic7,
              icon: "fa fa-heart",
              n1: "25",
              icon1: "fa fa-comment",
              n2: "5",
            },
            {
              img: pic8,
              icon: "fa fa-heart",
              n1: "40",
              icon1: "fa fa-comment",
              n2: "10",
            },
            {
              img: pic9,
              icon: "fa fa-heart",
              n1: "31",
              icon1: "fa fa-comment",
              n2: "0",
            },
            {
              img: pic10,
              icon: "fa fa-heart",
              n1: "48",
              icon1: "fa fa-comment",
              n2: "7",
            },
            {
              img: pic11,
              icon: "fa fa-heart",
              n1: "28",
              icon1: "fa fa-comment",
              n2: "5",
            },
            {
              img: pic12,
              icon: "fa fa-heart",
              n1: "71",
              icon1: "fa fa-comment",
              n2: "18",
            },
            {
              img: pic13,
              icon: "fa fa-heart",
              n1: "18",
              icon1: "fa fa-comment",
              n2: "4",
            },
            {
              img: pic14,
              icon: "fa fa-heart",
              n1: "30",
              icon1: "fa fa-comment",
              n2: "18",
            },
            {
              img: pic15,
              icon: "fa fa-heart",
              n1: "20",
              icon1: "fa fa-comment",
              n2: "2",
            },
            {
              img: pic16,
              icon: "fa fa-heart",
              n1: "40",
              icon1: "fa fa-comment",
              n2: "15",
            },
            {
              img: pic17,
              icon: "fa fa-heart",
              n1: "55",
              icon1: "fa fa-comment",
              n2: "8",
            },
            {
              img: pic18,
              icon: "fa fa-heart",
              n1: "30",
              icon1: "fa fa-comment",
              n2: "10",
            },
            {
              img: pic19,
              icon: "fa fa-heart",
              n1: "27",
              icon1: "fa fa-comment",
              n2: "10",
            },
            {
              img: pic20,
              icon: "fa fa-heart",
              n1: "21",
              icon1: "fa fa-comment",
              n2: "15",
            },
            {
              img: pic21,
              icon: "fa fa-heart",
              n1: "21",
              icon1: "fa fa-comment",
              n2: "15",
            },
          ]}
        />
      </div>
    );
  }
}
const Pict = ({ pi }) => (
  <div className="dp-gr">
    {pi.map((pp) => (
      <div className="dp-pic">
        <img src={pp.img} alt="" />
        <div className="dp-cht">
          <i className={pp.icon}>{pp.n1}</i>
          <i className={pp.icon1}>{pp.n2}</i>
        </div>
      </div>
    ))}
  </div>
);

export default compass;
