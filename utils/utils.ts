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
