import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import CurrentWeather from '../components/CurrentWeather';
import WeatherDataProvider from '../context/WeatherDataContext';
import { getWeather, WeatherData } from './api/getCurrentWeather';

const Home: NextPage<{ data: WeatherData }> = ({ data }) => {
    return (
        <div>
            <Head>
                <title>Weather App</title>
            </Head>

            <main>
                <WeatherDataProvider data={data}>
                    <CurrentWeather />
                </WeatherDataProvider>
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     console.log(position);
    // });
    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    console.log('IP: ', ip);
    const resp = await getWeather({ ip });
    return {
        props: {
            data: resp,
        },
    };
};

export default Home;
