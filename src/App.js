import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Temperature from './components/Temperature';
import SideNav from './components/SideNav';
import BackgroundVideo from './components/BackgroundVideo';
import Humidity from './components/Humidity';
import TempChart from './components/ReportChart';
import CatapultApi from './lib/CatapultApi';
import './App.css';

const reformatData = (data) => {
  console.log(data)
  return data.map((element) => {
    console.log(element);
    return element;
  });
};

const url = "http://localhost:8080/api"

function App() {

  const [deviceList, setDeviceList] = useState([]);
  const [temperatureByDateList, setTemperatureByDateList] = useState([]);

  const api = new CatapultApi(url);

  const getDevices = useCallback(() => {

    api.getDevices()
      .then((data) => {
        console.log(data);
        setDeviceList(data);
      })
  }, [api]);

  const getTemperaturebyDates = useCallback(() => {

    api.getTemperaturebyDates('2020-07-17T00:46:59Z', '2020-07-17T00:50:00Z')
      .then((data) => {
        
        setTemperatureByDateList(data);
      })
  }, [api]);

  useEffect(() => { getTemperaturebyDates(); }, [getTemperaturebyDates]);
  useEffect(() => { getDevices(); }, [getDevices]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-body'>
          <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <BackgroundVideo/>
          <Home />
          <Temperature />
          <Humidity />
        </div>
      </header>
    </div>
  );
}

export default App;
