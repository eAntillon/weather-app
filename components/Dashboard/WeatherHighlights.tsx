import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

import { WeatherData } from '../../pages/api/getCurrentWeather';

type props = {
    weatherData: WeatherData | undefined;
};
const WeatherHighlights: React.FC<props> = ({ weatherData }) => {
    return (
        <div className="flex flex-col bg-veryDarkBlue py-8 px-6 text-fontWhite">
            <h1 className="font-bold text-2xl mb-7 lg:mb-0">Today&#39;s Highlights</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8  justify-center items-center">
                {/* Wind Status */}
                <div className="flex flex-col justify-center items-center bg-darkBlue py-6 px-12 md:h-48">
                    <h3 className="font-medium">Wind Status</h3>
                    <p className="text-4xl">
                        <span className="text-6xl font-bold">
                            {weatherData?.current.wind_speed}
                        </span>
                        mph
                    </p>
                </div>
                {/* Humidity */}
                <div className="flex flex-col justify-center items-center bg-darkBlue py-6 px-12 md:h-48">
                    <h3 className="font-medium">Humidity</h3>
                    <p className="text-4xl mb-6">
                        <span className="text-6xl font-bold">
                            {weatherData?.current.humidity}
                        </span>
                        %
                    </p>
                    <div className="w-full">
                        <div className="w-full flex flex-row justify-between text-xs">
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>

                        <ProgressBar
                            completed={weatherData?.current.humidity || 0}
                            bgColor="#FFEC65"
                            height="8px"
                            borderRadius="80px"
                            labelAlignment="center"
                            labelColor="#e80909"
                            labelSize="0px"
                            padding="0px"
                            customLabel=" "
                            className="w-full"
                        />
                        <div className="w-full flex flex-row justify-end text-xs">
                            <p>%</p>
                        </div>
                    </div>
                </div>
                {/* Visibility */}
                <div className="flex flex-col justify-center items-center bg-darkBlue py-6 px-12 md:h-40">
                    <h3 className="font-medium">Visibility</h3>
                    <p className="text-4xl">
                        <span className="text-6xl font-bold">
                            {weatherData?.current.visibility}
                        </span>
                        miles
                    </p>
                </div>
                {/* Air Pressure */}
                <div className="flex flex-col justify-center items-center bg-darkBlue py-6 px-12 md:h-40">
                    <h3 className="font-medium">Air Pressure</h3>
                    <p className="text-4xl">
                        <span className="text-6xl font-bold">
                            {weatherData?.current.pressure}
                        </span>
                        mb
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherHighlights;
