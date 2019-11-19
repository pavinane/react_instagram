import React from 'react';
import './profile.scss';
import { Switch, Route, Link } from 'react-router-dom';
import img from './ImagesInsta/vijay.jpg';
import img1 from './ImagesInsta/ins1.jpg';
import img2 from './ImagesInsta/ins2.jpg';
import img3 from './ImagesInsta/ins3.jpg';
import img4 from './ImagesInsta/ins4.jpg';
import img5 from './ImagesInsta/ins5.jpg';
import img6 from './ImagesInsta/ins6.jpg';
import img7 from './ImagesInsta/ins7.jpg';
import img8 from './ImagesInsta/ins8.jpg';
import img9 from './ImagesInsta/ins9.jpg';
import img10 from './ImagesInsta/ins10.jpg';
import img11 from './ImagesInsta/ins11.jpg';
import img12 from './ImagesInsta/ins12.jpg';
import img13 from './ImagesInsta/ins13.jpg';
import img14 from './ImagesInsta/ins14.jpg';
import img15 from './ImagesInsta/ins15.jpg';
import img16 from './ImagesInsta/ins16.jpg';
import img17 from './ImagesInsta/ins17.jpg';
import img18 from './ImagesInsta/ins18.jpg';
import img19 from './ImagesInsta/ins19.jpg';
import img20 from './ImagesInsta/ins20.jpg';
import img21 from './ImagesInsta/ins21.jpg';
import pic1 from './ImagesInsta/sty1.jpeg';
import pic2 from './ImagesInsta/sty2.jpg';
import pic3 from './ImagesInsta/sty3.jpg';
import pic4 from './ImagesInsta/sty4.jpg';
import pic5 from './ImagesInsta/sty5.jpg';
import pic6 from './ImagesInsta/sty6.jpg';
import pic7 from './ImagesInsta/sty7.jpg';
import Navi from './Navi';
import Footer from './Footer';
import Igtv from './Igtv';

const Saved = () => (
  <>
    <Grid2 />
  </>
);

const Tagged = () => (
  <>
    <Igtv />
  </>
);

const Igtvi = () => (
  <>
    <Igtv />
  </>
);

const Postins = () => (
  <>
    <Grid2 />
  </>
);

class Prof extends React.Component {
  render() {
    return (
      <div className="nav-1">
        <Navi />
        <div className="prof">
          <div className="sides">
            <div className="prf-right">
              <img src={img} alt="" />
            </div>
            <div className="prf-left">
              <div className="id-name">
                <div className="name-1">
                  <h1>nanepavi97</h1>
                </div>
                <div className="e-p">
                  <Link to="/edit">
                    <button type="button">edit profile</button>
                  </Link>
                </div>
                <i className="fas fa-cog" />
              </div>
              <div className="pff">
                <div className="post">
                  <b> 21 </b>
                  post
                </div>
                <div className="followers">
                  <b> 89 </b>
                  followers
                </div>
                <div className="following">
                  <b> 363 </b>
                  following
                </div>
              </div>
              <div className="slogan">
                <h1>Páví Ñañ Ê 18/4/97</h1>
                <p>
                  alwayz classy ,nevr trashy,N a little bit sassy
                  <br />
                  🎂Candle on April 18🍾
                  <br />
                  ⛓Mechanical Engineer 🔩
                  <br />
                  Thalapathy rasigan
                </p>
              </div>
            </div>
          </div>
          <div className="sto">
            <Stry
              st={[
                {
                  pic: pic1,
                  name: 'Travel',
                },
                {
                  pic: pic2,
                  name: 'new venu...',
                },
                {
                  pic: pic3,
                  name: 'memories✨',
                },
                {
                  pic: pic4,
                  name: 'universe✨',
                },
                {
                  pic: pic5,
                  name: 'peace✨',
                },
                {
                  pic: pic6,
                  name: 'joy✨',
                },
                {
                  pic: pic7,
                  name: 'appa✨',
                },
              ]}
            />
          </div>
          <div className="grids">
            <Grid1 />
            <Switch>
              <Route exact path="/profile" component={Postins} />
              <Route exact path="/profile/igtv" component={Igtvi} />
              <Route exact path="/profile/saved" component={Saved} />
              <Route exact path="/profile/tagged" component={Tagged} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Stry = ({ st }) => (
  <div className="sty-grd">
    {st.map((gd) => (
      <div className="sty-crd">
        <div className="sty-pic">
          <img src={gd.pic} alt="" />
        </div>
        <h4>{gd.name}</h4>
      </div>
    ))}
  </div>
);

const Titl = ({ sc }) => (
  <div className="grd-names">
    {sc.map((crd) => (
      <Link to={crd.link}>
        <div className="sli-crd2">
          <h3>
            <i className={crd.icon} />
            {crd.heading}
          </h3>
        </div>
      </Link>
    ))}
  </div>
);
const Pict = ({ pi }) => (
  <div className="pic-names">
    {pi.map((pp) => (
      <div className="sli-pic">
        <img src={pp.img} alt="" />
        <div className="lk-cht">
          <i className={pp.icon}>{pp.n1}</i>
          <i className={pp.icon1}>{pp.n2}</i>
        </div>
      </div>
    ))}
  </div>
);
class Grid1 extends React.Component {
  render() {
    return (
      <Titl
        sc={[
          {
            link: '/profile',
            heading: 'post',
            icon: 'fas fa-th',
          },

          {
            link: '/profile/igtv',
            heading: 'igtv',
            icon: 'fas fa-tv',
          },
          {
            link: '/profile/saved',
            heading: 'saved',
            icon: 'far fa-bookmark',
          },

          {
            link: '/profile/tagged',
            heading: 'tagged',
            icon: 'far fa-user-circle',
          },
        ]}
      />
    );
  }
}

class Grid2 extends React.Component {
  render() {
    return (
      <div className="gi-2">
        <Pict
          pi={[
            {
              img: img1,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img2,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img15,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img16,
              icon: 'fa fa-heart',
              n1: '38',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img5,
              icon: 'fa fa-heart',
              n1: '45',
              icon1: 'fa fa-comment',
              n2: '12',
            },
            {
              img: img13,
              icon: 'fa fa-heart',
              n1: '52',
              icon1: 'fa fa-comment',
              n2: '1',
            },
            {
              img: img9,
              icon: 'fa fa-heart',
              n1: '25',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: img3,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img7,
              icon: 'fa fa-heart',
              n1: '31',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img10,
              icon: 'fa fa-heart',
              n1: '48',
              icon1: 'fa fa-comment',
              n2: '7',
            },
            {
              img: img11,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: img12,
              icon: 'fa fa-heart',
              n1: '71',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: img6,
              icon: 'fa fa-heart',
              n1: '18',
              icon1: 'fa fa-comment',
              n2: '4',
            },
            {
              img: img8,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: img14,
              icon: 'fa fa-heart',
              n1: '20',
              icon1: 'fa fa-comment',
              n2: '2',
            },
            {
              img: img4,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img21,
              icon: 'fa fa-heart',
              n1: '55',
              icon1: 'fa fa-comment',
              n2: '8',
            },
            {
              img: img17,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img18,
              icon: 'fa fa-heart',
              n1: '27',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img19,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img20,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
          ]}
        />
      </div>
    );
  }
}
export default Prof;
