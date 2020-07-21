import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './TimePicker.css';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const TimePicker = (props) => {

  const [starTime, startOnChange] = useState(new Date());
  const [endTime, endOnChange] = useState(new Date());

  const onInputChange = (event) => {
    // event.preventDefault();
    props.onSubmitCallback(starTime, endTime);
  };


  return (
    <div className="time-selector">
      <p className="text-time-selector">Start Time</p>
      <DateTimePicker
        onChange={startOnChange}
        value={starTime}
      />
      <p className="text-time-selector" >End Time</p>
      <DateTimePicker
        onChange={endOnChange}
        value={endTime}
      />
      <div>
        <input
          className="search-btn"
          type="button"
          value="Search"
          onClick={() => onInputChange()}
        />
      </div>
    </div>
  );
}

export default TimePicker;