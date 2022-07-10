import React, { useEffect } from 'react';
import SideBar from './Sidebar/SideBar';
import WeatherDashboard from './Dashboard/WeatherDashboard';

const CurrentWeather: React.FC<any> = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <SideBar />
            <WeatherDashboard />
        </div>
    );
};




export default CurrentWeather;


