import React from 'react';
import Plot from 'react-plotly.js';
import './ReportChar.css';


const ReportChart = (props) => {

  return (
    <Plot
      data={[
        {
          x: [],
          y: [],
          type: 'scattergl',
          name: 'temp',
          marker: { color: "turquoise" },
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
          }]
        }
      }
      }
    />
  );
}

export default ReportChart;