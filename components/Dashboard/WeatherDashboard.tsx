import React, { useContext } from 'react';
import { WeatherDataContext } from '../../context/WeatherDataContext';
import WeatherGrid from './WeatherGrid';
import WeatherHighlights from './WeatherHighlights';

const WeatherDashboard = () => {
    const { weatherData, scale, setScale } =
        useContext(WeatherDataContext) || {};

    return (
        <div className="flex flex-col lg:p-10 lg:p-12 xl:p-16 lg:w-2/3 lg:h-screen bg-veryDarkBlue lg:overflow-auto">
            <WeatherGrid daysWeather={weatherData?.daysWeather} scale={scale} />
            <WeatherHighlights weatherData={weatherData} />
        </div>
    );
};

export default WeatherDashboard;
