import React from 'react';
import { Parallax, Background } from "react-parallax";
import Chart from './lineChart';
import TimePicker from './TimePicker';
import CurrentValueCard from './Card'
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
              <Chart {...props} name={"Temperature"} />
              {/* <ReportChart {...props} name={"Humidity"}/> */}
              <CurrentValueCard 
                {...props} 
                image={"http://www.icons101.com/icons/80/Lovely_Weather_2_Icons_by_Custom_Icon_Design/128/Humidity.png"}
                title={"Current humidity"} 
                simbol={"%"}
              />
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