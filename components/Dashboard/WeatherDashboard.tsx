import React, { useContext } from 'react';
import { WeatherDataContext } from '../../context/WeatherDataContext';
import WeatherGrid from './WeatherGrid';
import WeatherHighlights from './WeatherHighlights';

const WeatherDashboard = () => {
    const { weatherData, scale, setScale } =
        useContext(WeatherDataContext) || {};

    return (
        <div className="flex flex-col">
            <WeatherGrid daysWeather={weatherData?.daysWeather} scale={scale} />
            <WeatherHighlights weatherData={weatherData} />
        </div>
    );
};

export default WeatherDashboard;
