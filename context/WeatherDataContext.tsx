import axios from 'axios';
import { useState, createContext, ReactNode, useEffect } from 'react';
import { WeatherData } from '../pages/api/getCurrentWeather';

interface Props {
    children?: ReactNode;
    data: WeatherData;
}

export type WeatherContextType = {
    weatherData: WeatherData;
    scale: string;
    setScale: Function;
    city: string;
    setCity: Function;
};

export const WeatherDataContext = createContext<WeatherContextType | null>(
    null
);

const WeatherDataProvider: React.FC<Props> = ({ children, data }) => {
    const [weatherData, setWeatherData] = useState<WeatherData>(data);
    const [scale, setScale] = useState('c');
    const [city, setCity] = useState('');
    useEffect(() => {
        if (city !== '') {
            axios(`/api/getWeatherByCity?city=${city}`).then((r) => {
                if (r.data.city) {
                    setWeatherData(r.data);
                }
            });
        }
    }, [city]);

    return (
        <WeatherDataContext.Provider
            value={{ weatherData, scale, setScale, city, setCity }}
        >
            {children}
        </WeatherDataContext.Provider>
    );
};

export default WeatherDataProvider;
