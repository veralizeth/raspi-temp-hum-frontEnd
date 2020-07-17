import React from 'react';
import { Parallax, Background } from "react-parallax";
import './Humidity.css';

const Humidity = () =>{
  return (
    <div className='tempe-section' id='about'>

      <Parallax strength={350}
        bgImage={require("../images/testPic.jpg")}
      >
        <div className="tempe-about">
          <p className="tempe-info" >Humidity</p>
        </div>
      </Parallax>
    </div>
  )
}

export default Humidity;