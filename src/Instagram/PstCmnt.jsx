import React from 'react';
import Navi from './Navi';
import Footer from './Footer';
import './pstcmnt.scss';
import psc from './ImagesInsta/psc1.jpg';
import prfimg from './ImagesInsta/vijay.jpg';
// import inslogos from './ImagesInsta/inslogos.png';
import img1 from './ImagesInsta/cimg1.jpg';
import img2 from './ImagesInsta/cimg2.jpg';
import img3 from './ImagesInsta/cimg3.jpg';
import img4 from './ImagesInsta/cimg4.jpg';
import img5 from './ImagesInsta/cimg5.jpg';
import img6 from './ImagesInsta/cimg6.jpg';
import img7 from './ImagesInsta/cimg7.jpg';

class Pc extends React.Component {
  render() {
    return (
      <div className="pst-c">
        <Navi />
        {/* <Footer /> */}
        <div className="p-c">
          <div className="us-post">
            <img src={psc} alt="" />
          </div>
          <div className="us-cmnt">
            <div className="follow-post">
              <div className="fp-1">
                <img src={img1} alt="" />
              </div>
              <div className="fp-2">
                <h2>sachintendulkar</h2>
              </div>
              <>
                <ul>
                  <li>following</li>
                </ul>
              </>
              <i className="fas fa-ellipsis-h" />
            </div>
            <Cmpos
              st={[
                {
                  pic: img1,
                  n: 'Sachintendulkar ',
                  p:
                    'Verified Happy Children’s Day to all the young ones, both in age and at heart! 😃',
                },
                {
                  pic: img2,
                  n: 'saratendulkar ',
                  p: ' Love you💖',
                  h: '9h',
                  l: '94 likes',
                  r: 'Reply',
                  k: 'far fa-heart',
                },
                {
                  pic: img3,
                  n: 'insta_vijay_07dz',
                  h: '18h',
                  l: '3 likes',
                  r: 'Reply',
                  k: 'far fa-heart',
                  p: 'LOVE YOU 💚NICE💚 *FOLLOW ME FRIENDS*',
                },
                {
                  pic: img4,
                  n: 'luku_rz',
                  p: '🌈',
                  k: 'far fa-heart',
                  h: '18h',
                  // l: '18 likes',
                  r: 'Reply',
                },
                {
                  pic: img5,
                  n: 'bhikhambansal',
                  p: 'Happy childrens day',
                  k: 'far fa-heart',
                  h: '13h',
                  // l: '18 likes',
                  r: 'Reply',
                },
                {
                  pic: img6,
                  n: 'varin_sunny',
                  p: 'Today is my birthday wish me Sachin sir😍',
                  k: 'far fa-heart',
                  h: '5h',
                  r: 'Reply',
                },
                {
                  pic: img7,
                  n: 'prettyprincessaaloka',
                  p: '🔥🔥🔥😍',
                  k: 'far fa-heart',
                  h: '10',
                  l: '3 likes',
                  r: 'Reply',
                },
              ]}
            />

            <div className="icon-follw">
              <div className="cmt-ic">
                <svg
                  aria-label="Activity Feed"
                  className="_8-yf5 "
                  fill="#262626"
                  height="30"
                  viewBox="0 0 48 48"
                  width="30"
                >
                  <path
                    clipRule="evenodd"
                    d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="_15y0l">
                  <span
                    aria-label="Comment"
                    className="glyphsSpriteComment__outline__24__grey_9 u-__7"
                  />
                </span>

                <i className="fas fa-comment" />
                <i className="fab fa-telegram-plane" />
                <i className="far fa-bookmark" />
              </div>
              <div className="lk-count">
                <div className="lk-cmn">
                  <img src={prfimg} alt="" />
                  <p>
                    Liked by
                    <b> srivaishnavi_karmegan </b>
                    and
                    <b> 143,854 likes </b>
                  </p>
                </div>
                <p>1 hour ago</p>
              </div>
            </div>
            <div className="post-cmt">
              <input type="text" placeholder="Add a comment" />
              <h3>Post</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const Cmpos = ({ st }) => (
  <div className="sty-grd">
    {st.map((gd) => (
      <div className="follwers-cmnt">
        <div className="user-pic">
          <img src={gd.pic} alt="" />
        </div>
        <div className="usrcmnt">
          <h4>
            {gd.n}
            <span>{gd.p}</span>
          </h4>
          <div className="ho-l-r">
            <div className="ho">
              <p>{gd.h}</p>
            </div>
            <div className="lik">
              <h2>{gd.l}</h2>
            </div>
            <div className="rep">
              <h2>{gd.r}</h2>
            </div>
          </div>
        </div>
        <div className="hrt">
          <i className={gd.k} />
          {/* <i>{gd.k}</h4> */}
        </div>
      </div>
    ))}
  </div>
);

export default Pc;
