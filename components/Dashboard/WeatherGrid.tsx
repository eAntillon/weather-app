import React from 'react';
import { dayWeather } from '../../pages/api/getCurrentWeather';
import WeatherCard from './WeatherCard';

type props = {
    daysWeather: Array<dayWeather> | undefined;
    scale: string | undefined;
};

const WeatherGrid: React.FC<props> = ({ daysWeather = [], scale = 'c' }) => {
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 bg-veryDarkBlue px-14 pt-12 pb-6">
            {daysWeather.map((day) => (
                <WeatherCard dailyData={day} scale={scale} key={day.datetime} />
            ))}
        </div>
    );
};

export default WeatherGrid;
