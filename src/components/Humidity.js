import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Humidity.css';

const Humidity = (props) =>{
  return (
    <div className='tempe-section' id='about'>
      <Parallax strength={350}
        bgImage={require("../images/fog.jpg")}
      >
        <div className="tempe-about">
          <TimePicker {...props}/>
          <ReportChart />
          <p className="tempe-info" >Humidity</p>
        </div>
      </Parallax>
    </div>
  )
}

export default Humidity;