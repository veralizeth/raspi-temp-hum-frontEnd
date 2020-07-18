import axios from 'axios';

const deviceEndPoint = "/devices";
const tempeEndPoint = "/temperature";

class CatapultApi {

  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  getDevices(){

    const url = `${this.baseUrl}${deviceEndPoint}`

    return axios.get(url)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw (error);
      });
  };

  getTemperaturebyDates(startDate, endDate) {

    const url = `${this.baseUrl}${tempeEndPoint}`

    return axios.get(url, {
      params: {
        timeStampStart: startDate,
        timeStampEnd: endDate
      }
    })
      .then((response) => {
        console.log(response.data);
        return response.data
      })
      .catch((error) => {
        console.log(error);
        throw(error);
      });
  };

}

export default CatapultApi;