import React, { useContext } from 'react';
import { WeatherDataContext } from '../../context/WeatherDataContext';
import WeatherGrid from './WeatherGrid';

const WeatherDashboard = () => {
    const { weatherData, scale, setScale } =
        useContext(WeatherDataContext) || {};

    return (
        <div className="flex flex-col">
            <WeatherGrid daysWeather={weatherData?.daysWeather} scale={scale} />
        </div>
    );
};

export default WeatherDashboard;
