import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Temperature.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Temperature = (props) =>{

  const temperatureArray = props.data;
  console.log(temperatureArray);

  return (
    <div className='tempe-section' id='temperature'>

      <Parallax strength={350}
        // bgImage={require("../images/grad.jpg")}
      >
        <p className="tempe-info" >Temperature</p>
        <div class="grid-container">
          <div className="tempe-about">
            <div className="search-dates">
              <TimePicker {...props} />
              <ReportChart {...props} name={"Temperature"} />
            </div>
            <div className="link">
              <Link
                activeClass="active"
                className="learn"
                to="humidity"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                Humidity Chart
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
      
    </div>
  )
}

export default Temperature;