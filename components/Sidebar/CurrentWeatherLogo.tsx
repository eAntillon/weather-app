import Image from 'next/image';
import React, { useState } from 'react';
import { getWeatherImage } from '../../utils/utils';

const CurrentWeatherLogo: React.FC<{ weather: string | undefined }> = ({
    weather = 'Clear',
}) => {
    const [imageUrl, setImageUrl] = useState(
        `/${getWeatherImage(weather)}.png`
    );

    return (
        <div className="relative w-full h-[21rem] flex justify-center items-center">
            <div
                className=" bg-80% h-full w-full bg-no-repeat bg-top opacity-10 absolute inset-0 "
                style={{ backgroundImage: `url('Cloud-background.png')` }}
            ></div>
            <div className="w-2/5 flex justify-center items-center">
                    <Image
                        src={imageUrl}
                        alt="currentWeather"
                        className="opacity-100"
                        width={800}
                        height={600}
                    />
            </div>
        </div>
    );
};

export default CurrentWeatherLogo;
