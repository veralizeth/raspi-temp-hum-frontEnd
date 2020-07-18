import React from 'react';
import Plot from 'react-plotly.js';


const ReportChart = () => {
    return (
      <Plot
        // data={[
        //   {
        //     x: [1, 2, 3],
        //     y: [2, 6, 3],
        //     type: 'scatter',
        //     mode: 'lines+markers',s
        //     marker: { color: 'red' },
        //   },
        //   { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        // ]}
        // layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}

        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers', },]}
        layout={{ width: 400, height: 300, title: 'A Fancy Plot' }}
      />
    );
}

export default ReportChart;