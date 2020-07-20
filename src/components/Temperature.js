import React from 'react';
import { Parallax, Background } from "react-parallax";
import TempChart from './TempChart';
import TimeTemPicker from './TimeTemPicker';
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
        <p className="tempe-info" >Temperature</p>
        <div className="search-dates">
          <TimeTemPicker {...props} />
        </div>
        <div className="tempe-about">
          <TempChart {...props} />
        </div>
      </Parallax>
      
    </div>
  )
}

export default Temperature;