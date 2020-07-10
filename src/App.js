import React, {useEffect, useState} from 'react'
import {Chart, Cards, CountryPicker} from './components';
import {fetchData} from './api';

import styles from './App.module.css';
import coronaImage from './components/images/image.png';

export const App = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');

    const handleCountryChange = async(country) => {
        setCountry(country);
        setData(await fetchData(country));
    }

    useEffect(() => {
        (async () => {
            setData(await fetchData());
        })();
    }, [])
    
    return (
        <div className={styles.container}>
            <h1>COVID-Tracker By Muhammad Baqir</h1>
            <img src={coronaImage} className={styles.image} alt="COVID-19"></img>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}