import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Humidity.css';

const Humidity = (props) =>{
  console.log(props);
  return (
    <div className='tempe-section' id='about'>
      <Parallax strength={380}
        bgImage={require("../images/fog.jpg")}
      >
        <p className="tempe-info" >Humidity</p>
        <div class="grid-container">
          <div className="tempe-about">
            <div className="search-dates">  
              <TimePicker {...props} />
              <ReportChart {...props} />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Humidity;