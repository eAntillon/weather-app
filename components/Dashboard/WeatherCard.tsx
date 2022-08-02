import Image from 'next/image';
import React from 'react';
import { dayWeather } from '../../pages/api/getCurrentWeather';
import { getWeatherImage } from '../../utils/utils';
interface props {
    dailyData: dayWeather;
    scale: string;
}

const WeatherCard: React.FC<props> = ({ dailyData: day, scale }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-darkBlue p-4 text-fontWhite">
            <h2>
                {new Date(day.datetime * 1000).toLocaleString('en-En', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'long',
                })}
            </h2>
            <div className="flex justify-center relative w-full mb-8">
                <Image
                    src={`/${getWeatherImage(day.weather)}.png`}
                    alt={day.weather}
                    className="w-10/12"
                    width={600}
                        height={600}
                />
            </div>
            <div className="flex w-full justify-between text-sm">
                <p>
                    {scale === 'f' ? day.max.f : day.max.c}
                    <span>°{scale.toUpperCase()}</span>
                </p>
                <p>
                    {scale === 'f' ? day.min.f : day.min.c}{' '}
                    <span className=" text-grey-200">
                        °{scale.toUpperCase()}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;
