import React, { PureComponent } from 'react';
import {
  Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, Legend
} from 'recharts';
import './lineChar.css';

const Chart = (props) => {

  console.log(props.data)
  const data = props.data;

  return (
    <LineChart width={700} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timeStamp" />
      <YAxis type="number" domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  )
}

export default Chart;