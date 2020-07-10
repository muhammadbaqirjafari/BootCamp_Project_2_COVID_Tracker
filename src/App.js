import React, {useEffect, useState} from 'react'

import {Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

export const App = () => {
    const [data, setData] = useState({});
    let country = '';

    const handleCountryChange = async(country) => {
        console.log(country);
    }

    useEffect(() => {
        (async () => {
            setData(await fetchData());
        })();
    }, [])
    
    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart/>
        </div>
    )
}