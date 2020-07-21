import React from 'react';
import classes from './BackgroundVideo.module.css';
import './Home.css';
import { Link, animateScroll as scroll } from "react-scroll";

const BackgroundVideo = () => {
  // const videoSource = "https://www.w3schools.com/tags/movie.mp4"
  const videoSource = "https://static.videezy.com/system/resources/previews/000/048/212/original/4K_18.mp4"
  
  // const videoSource = "../video/Digital_Grapes.mp4"
  return (
    <div className={classes.Container} >
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
        <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className={classes.Content}>
        <div className={classes.SubContent} >
          <h1 className="content-home">Catapult</h1>
          <p className="content-subtitle"> Raspberry PI Environment Monitoring </p>
          <Link
            activeClass="active"
            className="learn"
            to="temperature"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            Start
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo;