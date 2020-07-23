import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Card.css';


const currentValueCard = (props) => {
  
  const displayValue = props.currentData.length === 0 ? null : props.currentData[0]

  const averageValue = function (data) {
    if (data.length === 0) {
      return 0
    }
    let sum = null;
    data.forEach(function (element) {
      sum += element.value;
    });
    return (sum / data.length).toFixed(2)
  }

  const MaxValue = function (data) {
    const getMaxValue = Math.max(...data.map(e => e.value));
    const obj = data.find(metric => metric.value === getMaxValue);
    return obj
  }

  const  MinValue = function (data) {
    const getMinValue = Math.min(...data.map(e => e.value));
    const obj = data.find(metric => metric.value === getMinValue);
    return obj
  }

  return (
    <div className='card-section'>
      <Card>
        <Image src='https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2600.svg' wrapped ui={false} />
        <Card.Content>
          <Card.Meta className="title">{displayValue?.value.toFixed(2) || "Loading..."} {props.simbol} </Card.Meta>
          <Card.Header>{props.title}</Card.Header>
          <br></br>
          {averageValue(props.data) ? (
            <div className="card-content"> <strong>Avg:</strong> {averageValue(props.data)} {props.simbol}</div>
          ) : (
            <div></div>
          )}
          <br></br>
          { MaxValue(props.data)?.value ? (
            <div className="card-content"> <strong>Max:</strong> {MaxValue(props.data).value.toFixed(2)} {props.simbol}</div>
          ) : (
            <div></div>
          )}
          { MaxValue(props.data)?.timeStamp ? (
            <div className="card-content">{MaxValue(props.data).timeStamp}</div>
          ) : (
              <div></div>
          )}
          <br></br>
          { MinValue(props.data)?.value ? (
            <div className="card-content"> <strong>Min:</strong> {MinValue(props.data).value.toFixed(2)} {props.simbol}</div>
          ) : (
              <div></div>
            )}
          { MinValue(props.data)?.timeStamp ? (
            <div className="card-content">{MinValue(props.data).timeStamp}</div>
          ) : (
              <div></div>
            )}
        </Card.Content>
      </Card>
      </div>
    )
}

export default currentValueCard