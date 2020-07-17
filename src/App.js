import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Temperature from './components/Temperature';
import SideNav from './components/SideNav';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';
import Humidity from './components/Humidity';

function App() {

  const [temperatureList, setTemperatureList] = useState([]);

  const url = "http://localhost:8080/api"
  const endPoint = `${url}/devices`

  const getTemperature = (url) => {

    const reformatData = (data) => {
      console.log(data)
      return data.map((element) => {
        console.log(element);
        return element;
      });
    };

    axios.get(url)
      .then((response) => {
        console.log(response);
        const apiTemperatureList = reformatData(response.data);
        console.log(apiTemperatureList[0].temperatures);
        setTemperatureList(apiTemperatureList[0].temperatures);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => { getTemperature(endPoint); }, [endPoint]);

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
