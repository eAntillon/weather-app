import { useCycle } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { WeatherDataContext } from '../../context/WeatherDataContext';
import CurrentWeatherLogo from './CurrentWeatherLogo';
import Menu from './Menu';
import SearchBar from './SearchBar';
const SideBar = () => {
    const { weatherData, scale, setScale } =
        useContext(WeatherDataContext) || {};
    const [isOpen, toggleOpen] = useState(false);
    
    return (
        <div className='w-full lg:w-1/3'>
            <Menu open={isOpen} setOpen={toggleOpen} />
            <div className="w-full h-screen bg-darkBlue text-fontWhite">
                <SearchBar setOpen={toggleOpen} />

                <div className="flex flex-col justify-center items-center">
                    <CurrentWeatherLogo
                        weather={weatherData?.current.weather}
                    />
                    <div className="text-center text-grey-200">
                        <h2 className="text-7xl mb-6 text-white">
                            {scale === 'f'
                                ? weatherData?.current.temp.f
                                : weatherData?.current.temp.c}
                            <span className="text-5xl ml-2 text-grey-200">
                                °C
                            </span>
                        </h2>
                        <h3 className="text-4xl mb-12 font-medium">
                            {weatherData?.current.weather}
                        </h3>
                        <div className="flex justify-center items-center mb-8">
                            <p className="mr-3">Today</p>
                            <p className="mr-3 text-3xl">·</p>
                            <p>
                                {new Date().toLocaleString('en-En', {
                                    weekday: 'short',
                                    day: 'numeric',
                                    month: 'long',
                                })}
                            </p>
                        </div>
                        <p className="flex justify-center items-center font-semibold">
                            <i className="bx bx-map text-xl  mr-2"></i>{' '}
                            {weatherData?.city}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
