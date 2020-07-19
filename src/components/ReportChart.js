import React from 'react';
import Plot from 'react-plotly.js';
import './ReportChar.css';


const ReportChart = (props) => {

  // const presentData = (props) => {
  //   console.log(props.humidity)
  //   return props.humidity.map((element) => {
  //     console.log(element.value);
  //     return element;
  //   });
  // };

  
  const sliceData = (props) => {
    const humidityArray = props.humidity

    if (humidityArray.length > 100) {
      console.log(humidityArray.slice(Math.max(humidityArray.length - 100, 0)));
      return humidityArray.slice(Math.max(humidityArray.length - 100, 0));
    } else {
      return humidityArray
    }
  };

  const shotData = sliceData(props);

  let yData = shotData.map(element => {
    return element.value.toFixed(2);
  });

  let xData = shotData.map(element => {
    const ts = new Date(element.timeStamp);
    console.log(ts.toUTCString());
    return ts.toUTCString();
  });
  console.log("ydata")
  console.log(yData);

  console.log(xData);


    return (
      <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scattergl',
            name: 'temp',
            marker: {color: "red"},
          }]}

        layout={{
          width: 800, 
          height: 400,
          title: 'Temperature',
          legend: {x: 1, y:1, traceorder: "normal"},
        }}
        
      />
    );
}

export default ReportChart;