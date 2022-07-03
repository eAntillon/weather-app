import { useState, createContext, ReactNode } from 'react';
import { WeatherData } from '../pages/api/getCurrentWeather';

interface Props {
    children?: ReactNode;
    data: WeatherData;
}

export type WeatherContextType = {
    weatherData: WeatherData;
    scale: string;
    setScale: Function;
};

export const WeatherDataContext = createContext<WeatherContextType | null>(
    null
);

const WeatherDataProvider: React.FC<Props> = ({ children, data }) => {
    const [weatherData, setWeatherData] = useState<WeatherData>(data);
    const [scale, setScale] = useState('c');
    return (
        <WeatherDataContext.Provider value={{ weatherData, scale, setScale }}>
            {children}
        </WeatherDataContext.Provider>
    );
};

export default WeatherDataProvider;
