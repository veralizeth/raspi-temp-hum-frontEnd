import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Card.css';


const currentValueCard = (props) => {
  
  const displayValue = props.currentData.length === 0 ? null : props.currentData[0]


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

  const maxValueOfY = Math.max(...eventsArray.map(o => o.value), 0);
  console.log(maxValueOfY);

  const MaxValue = function (data) {
    const maxVotes = Math.max(...data.map(e => e.value));
    const obj = data.find(metric => metric.value === maxVotes);
    // console.log(obj)
    return obj
  }



  return (
    <div className='card-section'>
      <Card>
        <Image src='https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2600.svg' wrapped ui={false} />
        <Card.Content>
          {/* <Card.Header>{props.title}</Card.Header> */}
          <Card.Meta>Current {props.title}{displayValue?.value.toFixed(2) || "Loading..."} {props.simbol} </Card.Meta>
          {/* <Card.Meta> { averageValue(props.data) || ""} </Card.Meta> */}
          {averageValue(props.data) ? (
            <div className="product-sold-out"> Avg Value: {averageValue(props.data)}</div>
          ) : (
              <div></div>
          )}
          { MaxValue(props.data)?.value ? (
            <div className="product-sold-out"> Max Value: {MaxValue(props.data).value.toFixed(2)}</div>
          ) : (
            <div></div>
          )}
          {/* <Card.Meta>{ MaxValue(props.data)?.value || ""}  </Card.Meta> */}
          {MaxValue(props.data)?.timeStamp ? (
            <div className="product-sold-out"> Max value Date: {MaxValue(props.data).timeStamp}</div>
          ) : (
              <div></div>
          )}
{/* 
          <Card.Meta>{ MaxValue(props.data)?.timeStamp || ""} </Card.Meta> */}
        </Card.Content>
        <Card.Content extra>
          {/* <a>
        <Icon name='user' />
        10 Friends
      </a> */}
        </Card.Content>
      </Card>
      </div>
    )
}

export default currentValueCard