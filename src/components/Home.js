import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.css';

const Home = ()=> {
  return (
    <div className='home-section' id='home'>
      <p className="content-home">Hello</p>
      <p className="content-subtitle">Welcome to your personal Temperature and Humidity sensors </p>
      <Link
        activeClass="active"
        className="learn"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        Start
      </Link>

    </div>
  )
}

export default Home;