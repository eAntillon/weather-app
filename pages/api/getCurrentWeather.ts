import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
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
    ip: string | string[] | undefined;
};

export async function getWeather(params: WeatherParams) {
    const { ip } = params;

    let ipUrl = ip ? `?ip=${ip}` : '';
    if (Array.isArray(ip)) {
        ipUrl = `?ip=${ip[0]}`;
    }
    let urlLocation = `https://api.ipgeolocation.io/ipgeo?apiKey=${
        process.env.API_KEY_IPGEOLOCATION + ipUrl
    }`;

    const locationResponse = await axios.get(urlLocation);

    if (locationResponse.status !== 200) {
        throw new Error('No latitude longitude');
    }
    const { latitude, longitude, city } = locationResponse.data;

    const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );
    console.log(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );

    // console.log(urlLocation);

    if (weatherResponse.status !== 200) {
        throw new Error('No weather');
    }
    const { current, timezone_offset, daily } = weatherResponse.data;
    const daysRequired = daily.filter((d: any, i: number) => i > 0 && i < 6);
    const daysWeather = daysRequired.map((d: any) => {
        return {
            datetime: d.dt,
            max: {
                c: Math.round(((d.temp.max - 32) * 5) / 9),
                f: d.temp.max,
            },
            min: {
                c: Math.round(((d.temp.min - 32) * 5) / 9),
                f: d.temp.min,
            },
            weather: d.weather[0].main,
        };
    });
    const responseData: WeatherData = {
        city,
        current: {
            datetime: current.dt,
            humidity: current.humidity,
            pressure: current.pressure,
            temp: {
                c: Math.round(((current.temp - 32) * 5) / 9),
                f: current.temp,
            },
            visibility: current.visibility,
            weather: current.weather[0].main,
            wind_deg: current.wind_deg,
            wind_speed: current.wind_speed,
        },
        daysWeather,
        timezone_offset,
    };
    return responseData;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeatherData>
) {
    const data = await getWeather({ ip: undefined });
    res.status(200).json(data);
}
