import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let modifiedURL = url;
    
    if(country){
        modifiedURL = `${url}/countries/${country}`;
    }
    
    try {
        const {data : {recovered, deaths, confirmed, lastUpdate}} = await axios.get(modifiedURL);
        return {recovered, deaths, confirmed, lastUpdate};
    } catch (error) {
        console.log(error);   
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((data) => ({
            confirmed : data.confirmed.total,
            deaths : data.deaths.total,
            date : data.reportDate,
        }))

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}