import React from 'react';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import './Humidity.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Humidity = (props) =>{
  console.log(props);
  return (
    <div className='tempe-section' id='humidity'>
      <Parallax strength={380}
        // bgImage={require("../images/lilac.jpg")}
      >
        <p className="tempe-info" >Humidity</p>
        <div class="grid-container">
          <div className="tempe-about">
            <div className="search-dates">  
              <TimePicker {...props} />
              <ReportChart {...props} name={"Humidity"}/>
            </div>
            <div className="link">
              <Link
                activeClass="active"
                className="learn"
                to="temperature"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Humidity;