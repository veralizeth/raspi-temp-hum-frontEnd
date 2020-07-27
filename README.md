
Catapult Raspberry PI Environment Monitoring
===============================================

### Capstone Project - Vera Rodriguez - Ada Developers' Academy

To execute this project there are three repositories: 

1. raspi-temp-hum -> [Raspberry PI4- AWS Iot and SQS configurations](https://github.com/veralizeth/raspi-temp-hum/blob/master/README.md)
1. raspi-temp-hum-api ->  [Java Spring boot API Server](https://github.com/veralizeth/raspi-temp-hum-api)
1. raspi-temp-hum-frontEnd -> [React front-End](https://github.com/veralizeth/raspi-temp-hum-frontEnd)

## 3. raspi-temp-hum-frontEnd-> React application

## Table of Contents

* [Introduction and Technologies](#Introduction-and-Technologies)
* [Demo video](#Demo)
* [React installation](#React-installation)
* [The Catapult Project API](#The-Catapult-Project-API)
* [Axios configurations](#Axios-configurations)
* [React Recharts Library](#React-Recharts-Library)


## Introduction and Technologies
**The problem**: 

The React front-end should be able to access the information through 
api Restful routes, about Temperature and Humidity from RDS PostsgresQL Database. 

Be able to show the information by minute and using charts.

**The solution**: 

* Using Axios library to access the custom REST API from Java Spring Boot server and usu react charts to display the information about Temperature and Humidity. 

## Demo

Follow the link to see how Catapult works on a high level, here we explain how the web page works and how all the tech stack is integrated.

[Catapult Demo video](https://www.youtube.com/watch?v=DBegmTxu0hs&t=157s)

## React installation
Clone this repository and in the project directory, you can run:

#### `yarn install` or `npm install` 

To install all the depencies and libreries use in this repo. 

Then you can run:

#### `yarn start` or `npm install`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## The Catapult Project API

The API is hosted at http://ec2-3-15-31-145.us-east-2.compute.amazonaws.com:8080/api/ You can find the API documentation and source code hosted here in this repository [Raspi-temp-hum-api](https://github.com/veralizeth/raspi-temp-hum-api/blob/master/README.md#api-endpoints).

You can explore the API with Postman and see how the data is returned. 

## Axios configurations

#### Installation: 

```bash
$ npm install axios 
```
#### Using Axios exmple:

``` react
const getDevices = (url) => {
    axios.get(url)
      .then((response) => {
        setDeviceList(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  };
```

## React Recharts Library

NPM is the easiest and fastest way to get started using Recharts.

```bash
 $ npm install recharts
```

To use react charts the data should be formated like this: 

```json
[
{id: 22019, value: 26.899999618530273, timeStamp: "7/23/2020, 4:39:52 PM"},
{id: 22021, value: 26.899999618530273, timeStamp: "7/23/2020, 4:40:53 PM"},
{id: 22023, value: 26.899999618530273, timeStamp: "7/23/2020, 4:41:53 PM"} 
]
```

React component example: 

```react
import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './lineChar.css';

const Chart = (props) => {

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
```


