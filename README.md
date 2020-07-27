
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
* [React installation](#React)


## Introduction and Technologies
**The problem**: 

The React front-end should be able to access the information through 
api Restful routes, about Temperature and Humidity from RDS PostsgresQL Database. 

Be able to show the information by minute and using charts.

**The solution**: 

* Using Axios library to access the custom REST API from Java Spring Boot server and usu react charts to display the information about Temperature and Humidity. 

## Installation

## Available Scripts

Clone this repository and in the project directory, you can run:

#### `yarn install` or `npm install` 

To install all the depencies and libreries use in this repo. 

Then you can run:

#### `yarn start` or `npm install`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


