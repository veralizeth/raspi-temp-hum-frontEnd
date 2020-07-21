import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Temperature.css';

const Temperature = (props) =>{

  const temperatureArray = props.data;
  console.log(temperatureArray);

  return (
    <div className='tempe-section' id='about'>

      <Parallax strength={350}
        bgImage={require("../images/grad.jpg")}
      >
        <p className="tempe-info" >Temperature</p>
        <div class="grid-container">
          <div className="tempe-about">
            <div className="search-dates">
              <TimePicker {...props} />
              <ReportChart {...props} name={"Temperature"} />
            </div>
          </div>
        </div>
      </Parallax>
      
    </div>
  )
}

export default Temperature;