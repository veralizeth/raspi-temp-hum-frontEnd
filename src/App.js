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




  
  const eventsArray = [{ id: 15430, value: 46.900001525878906, timeStamp: "2020-07-21T05:07:46.000+00:00" },
  { id: 19300, value: 49.70000076293945, timeStamp: "2020-07-23T00:46:56.000+00:00" },
  { id: 14772, value: 47.099998474121094, timeStamp: "2020-07-20T23:35:38.000+00:00" },
  { id: 16820, value: 56.900001525878906, timeStamp: "2020-07-22T03:55:10.000+00:00" },
  { id: 18270, value: 50.900001525878906, timeStamp: "2020-07-22T16:07:02.000+00:00" },
  { id: 15166, value: 43.599998474121094, timeStamp: "2020-07-21T02:54:30.000+00:00" },
  { id: 16958, value: 57.20000076293945, timeStamp: "2020-07-22T05:04:49.000+00:00" },
  { id: 17626, value: 51.79999923706055, timeStamp: "2020-07-22T10:41:58.000+00:00" },
  { id: 18298, value: 50.79999923706055, timeStamp: "2020-07-22T16:21:10.000+00:00" },
  { id: 17026, value: 57.599998474121094, timeStamp: "2020-07-22T05:39:08.000+00:00" }]

  const groupByTimePeriod = function (obj, timestamp, period) {
    const objPeriod = {};
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

    for (let i = 0; i < obj.length; i++) {

      let getUtcDate = new Date(obj[i][timestamp]);
      let convertTimestamp = getUtcDate.getTime() / 1000;

      let d = new Date(convertTimestamp * 1000);

      if (period === 'day') {
        d = Math.floor(d.getTime() / oneDay);
      } else if (period === 'week') {
        d = Math.floor(d.getTime() / (oneDay * 7));
      } else if (period === 'month') {
        d = (d.getFullYear() - 1970) * 12 + d.getMonth();
      } else if (period === 'year') {
        d = d.getFullYear();
      } else if (period === 'hour') {
        d = Math.floor(d.getTime() / (oneDay / 24));
      } else {
        console.log('groupByTimePeriod: You have to set a period! day | week | month | year');
      }
      // define object key
      objPeriod[d] = objPeriod[d] || [];
      objPeriod[d].push(obj[i]);
    }
    return objPeriod;
  };

  // const eventsArray = [{ id: 1, date: 1317906596 }, { id: 2, date: 1317908605 }, { id: 3, date: 1317909229 }, { id: 4, date: 1317909478 }, { id: 5, date: 1317909832 }, { id: 6, date: 1317979141 }, { id: 7, date: 1317979232 }, { id: 8, date: 1317986965 }, { id: 9, date: 1318582119 }, { id: 10, date: 1318595862 }, { id: 11, date: 1318849982 }, { id: 12, date: 1318855706 }, { id: 13, date: 1318929018 }, { id: 14, date: 1318933265 }, { id: 15, date: 1318940511 }, { id: 16, date: 1318945096 }, { id: 17, date: 1319017541 }, { id: 18, date: 1319527136 }, { id: 19, date: 1318582119 }, { id: 20, date: 1318595862 }, { id: 21, date: 1318582119 }, { id: 22, date: 1318595862 }, { id: 23, date: 1319713399 }, { id: 24, date: 1320053428 }, { id: 25, date: 1320333481 }, { id: 26, date: 1320832755 }, { id: 27, date: 1321012378 }, { id: 28, date: 1321280993 }, { id: 29, date: 1321347659 }, { id: 30, date: 1321350476 }, { id: 31, date: 1321369307 }, { id: 32, date: 1321369614 }, { id: 33, date: 1321610123 }, { id: 34, date: 1321613205 }, { id: 35, date: 1321617250 }, { id: 36, date: 1321626603 }, { id: 37, date: 1321865808 }, { id: 38, date: 1321876609 }, { id: 39, date: 1321877598 }, { id: 40, date: 1321877832 }, { id: 41, date: 1321953322 }, { id: 42, date: 1322061969 }, { id: 43, date: 1322142603 }, { id: 44, date: 1322211686 }, { id: 45, date: 1322213793 }, { id: 46, date: 1322214569 }, { id: 47, date: 1322482817 }, { id: 48, date: 1322663742 }, { id: 49, date: 1322664267 }, { id: 50, date: 1322747231 }, { id: 51, date: 1322819964 }, { id: 52, date: 1323358224 }, { id: 53, date: 1323681272 }, { id: 54, date: 1323695093 }, { id: 55, date: 1323696589 }, { id: 56, date: 1323763763 }, { id: 57, date: 1322819964 }, { id: 58, date: 1323681272 }, { id: 59, date: 1323851164 }, { id: 60, date: 1323853123 }, { id: 61, date: 1323854271 }, { id: 62, date: 1323858072 }, { id: 63, date: 1325690573 }, { id: 64, date: 1325751893 }, { id: 65, date: 1325760204 }, { id: 66, date: 1325769098 }, { id: 67, date: 1325769981 }, { id: 68, date: 1325771632 }, { id: 69, date: 1325776473 }, { id: 70, date: 1325837346 }, { id: 71, date: 1326110199 }, { id: 72, date: 1326793097 }, { id: 73, date: 1326878182 }, { id: 74, date: 1326881341 }, { id: 75, date: 1326975873 }, { id: 76, date: 1326985667 }, { id: 77, date: 1327047585 }, { id: 78, date: 1327062945 }, { id: 79, date: 1327063660 }, { id: 80, date: 1327322844 }, { id: 81, date: 1327326904 }, { id: 82, date: 1327329215 }, { id: 83, date: 1327397042 }, { id: 84, date: 1327399839 }, { id: 85, date: 1327401818 }, { id: 86, date: 1327407161 }, { id: 87, date: 1327419420 }, { id: 88, date: 1327570243 }, { id: 89, date: 1327578536 }, { id: 90, date: 1327584554 }, { id: 91, date: 1327914616 }, { id: 92, date: 1327917019 }, { id: 93, date: 1327931685 }, { id: 94, date: 1327933025 }, { id: 95, date: 1327934772 }, { id: 96, date: 1327947074 }, { id: 97, date: 1328626734 }, { id: 98, date: 1328626734 }, { id: 99, date: 1330070074 }, { id: 100, date: 1330073135 }, { id: 101, date: 1330073259 }, { id: 102, date: 1330332445 }, { id: 103, date: 1330351925 }, { id: 104, date: 1330420928 }, { id: 105, date: 1330423209 }, { id: 106, date: 1330437337 }, { id: 107, date: 1330439446 }];

  const objPeriodDay = groupByTimePeriod(eventsArray, 'timeStamp', 'day');
  // const objPeriodWeek = groupByTimePeriod(eventsArray, 'date', 'week');
  // const objPeriodMonth = groupByTimePeriod(eventsArray, 'date', 'month');
  // const objPeriodYear = groupByTimePeriod(eventsArray, 'date', 'year');

  // console.log(objPeriodDay);
  // console.log(objPeriodWeek);
  // console.log(objPeriodMonth);
  // console.log(objPeriodYear);

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
