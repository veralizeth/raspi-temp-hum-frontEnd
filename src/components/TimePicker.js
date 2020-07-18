import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './TimePicker.css';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const TimePicker = (props) => {


  // const onDateChangeCallback = (event) => {
  //   event.preventDefault();
  //   props.onSubmitCallback(date);
  // };

  const [value, onChange] = useState(new Date());

  console.log(value)

  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TimePicker;