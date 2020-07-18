import React from 'react';
import { Parallax, Background } from "react-parallax";
import './Temperature.css';

const Temperature = () =>{
  return (
    <div className='tempe-section' id='about'>

      <Parallax strength={350}
        bgImage={require("../images/temp.jpg")}
      >
        <div className="tempe-about">
          <p className="tempe-info" >Temperature</p>
        </div>
      </Parallax>
      
    </div>
  )
}

export default Temperature;