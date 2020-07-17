import React from 'react';
import classes from './BackgroundVideo.module.css';
import './Home.css';

const BackgroundVideo = () => {
  // const videoSource = "https://www.w3schools.com/tags/movie.mp4"
  const videoSource = "https://static.videezy.com/system/resources/previews/000/049/271/original/bg_0048.mp4"
  
  // const videoSource = "../video/Digital_Grapes.mp4"
  return (
    <div className={classes.Container} >
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
        <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className={classes.Content}>
        <div className={classes.SubContent} >
          <h1>Hello</h1>
          <p className="content-subtitle">Welcome to your personal Temperature and Humidity sensors </p>
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo