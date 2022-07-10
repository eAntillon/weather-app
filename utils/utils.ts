import { WeatherData } from "../pages/api/getCurrentWeather";

export const getWeatherImage = (name: string) => {
    let img = '';
    switch (name) {
        case 'Thunderstorm':
            img = 'Thunderstorm';
            break;
        case 'Drizzle':
            img = 'LightRain';
            break;
        case 'Rain':
            img = 'HeavyRain';
            break;
        case 'Snow':
            img = 'Snow';
            break;
        case 'Clear':
            img = 'Clear';
            break;
        case 'Clouds':
            img = 'HeavyCloud';
            break;
        default:
            img = 'Clear';
    }
    return img;
};


export function  processWeatherData(data:any, city:string):WeatherData {
    const { current, timezone_offset, daily } = data;
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
    return responseData
}
