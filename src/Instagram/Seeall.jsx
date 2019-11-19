import React from 'react';
import './see.scss';
import img1 from './IGtvimage/see1.jpg';
import img2 from './IGtvimage/see2.jpg';
import img3 from './IGtvimage/see3.jpg';
import img4 from './IGtvimage/see4.jpg';
import img5 from './IGtvimage/see5.jpg';
import img6 from './IGtvimage/see6.jpg';
import img7 from './IGtvimage/see7.jpg';
import img8 from './IGtvimage/see8.jpg';
import img9 from './IGtvimage/see9.jpg';
import img10 from './IGtvimage/see10.jpg';
import img11 from './IGtvimage/see11.jpg';
import img12 from './IGtvimage/see12.jpg';
import Navi from './Navi';

const See = () => (
  <div className="see">
    <Navi />
    <div className="all">
      <h1>Suggested</h1>
      <div className="s-a">
        <Seeall
          sa={[
            {
              img: img1,
              n: 'golisodaKanchi',
              p: 'Goli Soda',
              sa: 'New to Instagram',
            },
            {
              img: img2,
              n: 'just_in_717',
              p: 'Justin Pearlin',
              sa: 'New to Instagram',
            },
            {
              img: img3,
              n: 'madh_u25',
              p: 'Madhumitha',
              sa: 'New to Instagram',
            },
            {
              img: img4,
              n: 'radhi9848',
              p: 'radhi Jenifer',
              sa: 'New to Instagram',
            },
            {
              img: img5,
              n: 'saro_maestro',
              p: 'Saran Maestro',
              sa: 'follow you',
            },
            {
              img: img6,
              n: 'rubeshas',
              p: 'ruban',
              sa: 'Followed by prabha.smarty + 1 more',
            },
            {
              img: img7,
              n: 'veramani53',
              p: 'mani majestic',
              sa: 'Followed by prabha.smarty + 16 more',
            },
            {
              img: img8,
              n: '_yuvaraj.subramani',
              p: '🎀👑 𝐘𝐮𝐯𝐚𝐫𝐚𝐣𝐒𝐮𝐛𝐫𝐚𝐦𝐚𝐧𝐢 👑🎀',
              sa: 'Followed by _duke_luvr_ + 1 more',
            },
            {
              img: img9,
              n: 'mahmahi22',
              p: 'mahamahi22',
              sa: 'New to Instagram',
            },
            {
              img: img10,
              n: 'thala_pr44',
              p: 'Predeeprajan',
              sa: 'Followed by _ravin_4_ + 5 more',
            },
            {
              img: img11,
              n: 'mr.lucky7274',
              p: 'Marish.mani',
              sa: 'New to Instagram',
            },
            {
              img: img12,
              n: 'kokila582',
              p: 'kayal',
              sa: 'New to Instagram',
            },
          ]}
        />
      </div>
    </div>
  </div>
);

const Seeall = ({ sa }) => (
  <div className="all-names">
    {sa.map((all) => (
      <div className="see-card">
        <div className="see-lft">
          <img src={all.img} alt="" />
          <div className="all-na">
            <h2>{all.n}</h2>
            <p>{all.p}</p>
            <small>{all.sa}</small>
          </div>
        </div>
        <div className="see-right">
          <button type="button">Follow</button>
        </div>
      </div>
    ))}
  </div>
);

export default See;
