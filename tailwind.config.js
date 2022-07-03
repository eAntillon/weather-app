module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                darkBlue: '#1E213A',
                veryDarkBlue: '#100E1D',
                blueGray: '#585676',
                yellow: '#FFEC65',
                purpleBlue: '#3C47E9',
                grey: {
                    100: '#6E707A',
                    200: '#A09FB1',
                    300: '88869D',
                    400: '#616475',
                },
                fontWhite: '#E7E7EB',
            },
            dropShadow: {
                button: '0px 4px 4px 0px #00000040',
            },
            backgroundSize: {
                '80%': '154%',
            },
        },
    },
    plugins: [],
};
