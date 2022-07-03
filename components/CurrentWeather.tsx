import React, { useEffect } from 'react';
import SideBar from './Sidebar/SideBar';
import WeatherDashboard from './Dashboard/WeatherDashboard';

const CurrentWeather: React.FC<any> = () => {
    return (
        <div>
            <SideBar />
            <WeatherDashboard />
        </div>
    );
};




export default CurrentWeather;


