import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { processWeatherData } from '../../utils/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // weather request
    const weatherResponseCoords = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );
    console.log(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );

    if (weatherResponseCoords.status !== 200) {
        res.status(500).json({ error: 'No city' });
    }
    const { coord } = weatherResponseCoords.data;
    // weather request
    const weatherResponseData = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${process.env.API_KEY_OPEN_WEATHER}`
    );

    if (weatherResponseData.status !== 200) {
        throw new Error('No weather');
    }
    const city = typeof req.query.city === 'string' ? req.query.city : '';
    res.status(200).json(processWeatherData(weatherResponseData.data, city));
}
