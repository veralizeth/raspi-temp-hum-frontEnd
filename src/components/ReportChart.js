import React from 'react';
import Plot from 'react-plotly.js';
import './ReportChar.css';


const ReportChart = (props) => {

  const sliceData = (props) => {
    const humidityArray = props.data
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
    return ts.toLocaleString();
  });
  console.log("ydata")

    return (
      <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scattergl',
            name: 'temp',
            marker: { color: "midnightblue" },
          }]}

        layout={{
          width: 600,
          height: 500,
          title: props.name,
          // legend: { x: 1, y: 1 },
          font: {
            family: 'sans-serif', size: 14, color: 'midnightblue'
          },
        }}

      options={{
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            }
          }]}
    }
}
      />
    );
}

export default ReportChart;