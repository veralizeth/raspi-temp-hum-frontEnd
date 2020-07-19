import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Temperature.css';

const Temperature = (props) =>{

  console.log(props.temperature)
  const temperatureArray = props.temperature;
  console.log(temperatureArray);

  return (
    <div className='tempe-section' id='about'>

      <Parallax strength={350}
        bgImage={require("../images/temp.jpg")}
      >
        <div className="search-dates">
          <TimePicker {...props} />
        </div>
        <div className="tempe-about">
  
          <p className="tempe-info" >Temperature</p>
        </div>
      </Parallax>
      
    </div>
  )
}

export default Temperature;