import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Home from './components/Home';
import Temperature from './components/Temperature';
import SideNav from './components/SideNav';
import BackgroundVideo from './components/BackgroundVideo';
import Humidity from './components/Humidity';
// import TempChart from './components/ReportChart';
// import CatapultApi from './lib/CatapultApi';
import './App.css';

// const reformatData = (data) => {
//   console.log(data)
//   return data.map((element) => {
//     console.log(element);
//     return element;
//   });
// };

// const url = "http://localhost:8080/api"

function App(props) {


    // const api = new CatapultApi(url);

  // const getDevices = useCallback(() => {

  //   api.getDevices()
  //     .then((data) => {
  //       console.log(data);
  //       setDeviceList(data);
  //     })
  // }, [api]);

  // const getTemperaturebyDates = useCallback(() => {
  //   api.getTemperaturebyDates('2020-07-17T00:46:59Z', '2020-07-17T00:50:00Z')
  //     .then((data) => {
  //       setTemperatureByDateList(data);
  //     })
  // }, [api]);

  // useEffect(() => { getTemperaturebyDates();}, [getTemperaturebyDates]);
  // useEffect(() => { getDevices(); }, [getDevices]);

  const [deviceList, setDeviceList] = useState([]);
  const [temperatureByDateList, setTemperatureByDateList] = useState([]);
  const [humidityByDateList, sethumidityByDateList] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);
  const [currentHum, setCurrentHum] = useState([]);

  const baseUrl = "http://ec2-3-15-31-145.us-east-2.compute.amazonaws.com:8080/api"
  const devicesEndPoint = `${baseUrl}/devices`
  const tempEndPoint = `${baseUrl}/temperature`
  const humEndPoint = `${baseUrl}/humidity`


  const getDevices = (url) => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        // const formatData = reformatData(response.data)
        setDeviceList(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // const getTemperaturebyDates = (startDate, endDate) => {
  //   axios.get(tempEndPoint, {
  //     params: {
  //       timeStampStart: '2020-07-18T22:49:57Z',
  //       timeStampEnd: '2020-07-18T22:50:57Z'
  //     }
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setTemperatureByDateList(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw (error);
  //     });
  // };

  useEffect(() => { getDevices(devicesEndPoint); }, [devicesEndPoint]);
  // useEffect(() => { getTemperaturebyDates(tempEndPoint); }, [tempEndPoint]);

  const onSubmitHumCallback = (startTime, endTime) => {

    console.log(startTime.toISOString());
    console.log(endTime.toJSON());

    axios.get(humEndPoint, {
      params: {
        timeStampStart: startTime.toJSON(),
        timeStampEnd:  endTime.toJSON()
      }
    })
      .then((response) => {
        console.log(response.data);
        const timeStampFormated = reformatData(response.data);
        sethumidityByDateList(timeStampFormated)
      })
      .catch((error) => {
        console.log(error);
        throw (error);
      });
  }


  const onSubmitTemCallback = (startTime, endTime) => {

    console.log(startTime.toISOString());
    console.log(endTime.toJSON());

    axios.get(tempEndPoint, {
      params: {
        timeStampStart: startTime.toJSON(),
        timeStampEnd: endTime.toJSON()
      }
    })
      .then((response) => {
        console.log(response.data);
        const timeStampFormated = reformatData(response.data);
        setTemperatureByDateList(timeStampFormated)
      })
      .catch((error) => {
        console.log(error);
        throw (error);
      });
  }

  const reformatData = (data) => {
    const niceDatesFormat = [];
    data.forEach(function (element) {
      niceDatesFormat.push({ id: element.id, value: element.value, timeStamp: new Date(element.timeStamp).toLocaleString() });
    });
    return niceDatesFormat;
  }


  const currentTemperature = (url) => {

    const timeNow = new Date(Date.now());
    const aMinuteAgo = new Date(Date.now() - 5000 * 60);

    axios.get(url, {
      params: {
        timeStampStart: aMinuteAgo.toJSON(),
        timeStampEnd: timeNow.toJSON()
      }
    })
      .then((response) => {
        console.log(response);
        const timeStampFormated = reformatData(response.data);
        setCurrentTemp(timeStampFormated);
      })
      .catch((error) => {
        console.log(error);
        throw (error);
      });
  }
  
  useEffect(() => { currentTemperature(tempEndPoint); }, [tempEndPoint]);

  const currentHumidity = (url) => {

    const timeNow = new Date(Date.now());
    const aMinuteAgo = new Date(Date.now() - 5000 * 60);

    axios.get(url, {
      params: {
        timeStampStart: aMinuteAgo.toJSON(),
        timeStampEnd: timeNow.toJSON()
      }
    })
      .then((response) => {
        console.log(response);
        const timeStampFormated = reformatData(response.data);
        setCurrentHum(timeStampFormated);
      })
      .catch((error) => {
        console.log(error);
        throw (error);
      });
  }

  useEffect(() => { currentHumidity(humEndPoint); }, [humEndPoint]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-body'>
          <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <BackgroundVideo/>
          {/* <Home /> */}
          <Temperature
            onSubmitCallback={onSubmitTemCallback} 
            data={temperatureByDateList}
            currentData={currentTemp}
            {...props}
          />
          <Humidity 
            onSubmitCallback={onSubmitHumCallback} 
            data={humidityByDateList} 
            currentData={currentHum}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
