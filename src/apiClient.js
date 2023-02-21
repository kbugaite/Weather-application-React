import axios from "axios"

export class ApiClient {

    responseStatusCheck = (resObj) => {
        if (resObj.status >= 200 && resObj.status < 300) {
            return Promise.resolve(resObj);
        } else {
            return Promise.reject(new Error(resObj.status));
        }
    };

    getRequest = async (url) => {
        try {
            const req = await axios.get(url);
            const res = await this.responseStatusCheck(req);
            return res;
        } catch (error) {
            return {
                content: "Error getting data",
            };
        }
    };


    fetchWeather = async (lat, lon, key) => {
        const weather = await this.getRequest(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        console.log(weather);
        return weather.data;
    }


    fetchLocation = async (location, key) => {
        const locationVal = await this.getRequest(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${key}`)
        return locationVal.data;

    }
}


/* API Weather Datamap
ID 
    Object/data/list/Object0/weather/id
Day
    Object/data/list/Object0/dt_txt  (probably needs reformatting)
Date
    Object/data/list/Object0/dt_txt  (probably needs reformatiing)
Icon
    Object/data/list/Object0/weather/icon
Description
    Object/data/list/Object0/weather/description
Min Temp
    Object/data/list/Object0/main/temp_min
Max Temp
    Object/data/list/Object0/main/temp_max
Wind Speed
    Object/data/list/Object0/wind/speed

Access data for indexes accesaing Object[0,8,16,24,32] for all five days

*/


