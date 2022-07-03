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
            <div className="absolute  w-2/5 flex justify-center items-center">
                <img src={imageUrl} alt="" className="opacity-100" />
            </div>
        </div>
    );
};

export default CurrentWeatherLogo;
