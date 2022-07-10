import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { processWeatherData } from '../../utils/utils';
export type dayWeather = {
    datetime: number;
    max: { c: number; f: number };
    min: { c: number; f: number };
    weather: string;
};

export type WeatherData = {
    city: string;
    current: {
        datetime: number;
        humidity: number;
        pressure: number;
        temp: { c: number; f: number };
        visibility: number;
        weather: string;
        wind_deg: number;
        wind_speed: number;
    };
    daysWeather: Array<dayWeather>;
    timezone_offset: number;
};

type WeatherParams = {
    ip?: string | string[];
    location?: {
        latitude: number;
        longitude: number;
    };
};

export async function getWeather(params: WeatherParams) {
    const { ip, location } = params;

    // Get ip
    let ipUrl = ip ? `?ip=${ip}` : '';
    if (Array.isArray(ip)) {
        ipUrl = `?ip=${ip[0]}`;
    }
    // Get latitude longitude
    let urlLocation = `https://api.ipgeolocation.io/ipgeo?apiKey=${
        process.env.API_KEY_IPGEOLOCATION + ipUrl
    }`;
    // location request
    const locationResponse = await axios.get(urlLocation);

    if (locationResponse.status !== 200) {
        throw new Error('No latitude longitude');
    }
    const { latitude, longitude, city } = locationResponse.data;

    // weather request
    const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );

    if (weatherResponse.status !== 200) {
        throw new Error('No weather');
    }

    return processWeatherData(weatherResponse.data, city);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeatherData>
) {
    const data = await getWeather({ ip: undefined });
    res.status(200).json(data);
}
