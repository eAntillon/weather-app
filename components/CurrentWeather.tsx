import React, { useContext, useEffect } from 'react';
import SideBar from './Sidebar/SideBar';
import WeatherDashboard from './Dashboard/WeatherDashboard';
import { WeatherDataContext } from '../context/WeatherDataContext';
import Loading from './Loading/Loading';
const CurrentWeather: React.FC<any> = () => {
    const ctx = useContext(WeatherDataContext);

    if (ctx?.isLoading) {
        return (
            <div className="flex bg-darkBlue h-screen w-full justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <SideBar />
            <WeatherDashboard />
        </div>
    );
};

export default CurrentWeather;
