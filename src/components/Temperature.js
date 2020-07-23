import React from 'react';
import axios from 'axios';
import { Parallax, Background } from "react-parallax";
import ReportChart from './ReportChart';
import TimePicker from './TimePicker';
import CurrentValueCard from './Card'
import Chart from './lineChart'
import './Temperature.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Temperature = (props) =>{

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
              <Chart {...props} name={"Temperature"} />
              {/* <ReportChart {...props} name={"Temperature"} /> */}
              <CurrentValueCard {...props} title={"Current Temperature:"} />
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