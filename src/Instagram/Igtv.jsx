import React from 'react';
import './igtv.scss';
import img1 from './IGtvimage/ig1.jpg';
import img2 from './IGtvimage/ig2.jpg';
import img3 from './IGtvimage/ig3.jpg';
import img4 from './IGtvimage/ig4.jpg';
import img5 from './IGtvimage/ig5.jpg';
import img6 from './IGtvimage/ig6.jpg';
import img7 from './IGtvimage/ig7.jpg';
import img8 from './IGtvimage/ig8.jpg';
import img9 from './IGtvimage/ig9.jpg';
import img10 from './IGtvimage/ig10.jpg';
import img11 from './IGtvimage/ig11.jpg';
import img12 from './IGtvimage/ig12.jpg';
import img13 from './IGtvimage/ig13.jpg';
import img14 from './IGtvimage/ig14.jpg';
import img15 from './IGtvimage/ig15.jpg';
import img16 from './IGtvimage/ig16.jpg';
import img17 from './IGtvimage/ig17.jpg';
import img18 from './IGtvimage/ig18.jpg';
import img19 from './IGtvimage/ig19.jpg';
import img20 from './IGtvimage/ig20.jpg';
import img21 from './IGtvimage/ig21.jpg';
import img22 from './IGtvimage/ig22.jpg';
import img23 from './IGtvimage/ig23.jpg';
import img24 from './IGtvimage/ig24.jpg';

class IGtv extends React.Component {
  render() {
    return <IG />;
  }
}

const Ig = ({ pi }) => (
  <div className="tv">
    {pi.map((pp) => (
      <div className="tv-pic">
        <img src={pp.img} alt="" />
        <div className="tv-cht">
          <i className={pp.icon}>{pp.n1}</i>
          <i className={pp.icon1}>{pp.n2}</i>
          <p>{pp.para}</p>
        </div>
      </div>
    ))}
  </div>
);

class IG extends React.Component {
  render() {
    return (
      <div className="g-2">
        <Ig
          pi={[
            {
              img: img1,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
              para: 'coming in  2020',
            },
            {
              img: img2,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '0',
              para: 'the new pope tease',
            },
            {
              img: img15,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
              para: 'his dark materials trails',
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
            {
              img: img22,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img23,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img24,
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

export default IGtv;
