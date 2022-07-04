import React from 'react';
type props = {
    setOpen: Function;
};

const SearchBar: React.FC<props> = ({ setOpen }) => {
    return (
        <div className="w-full flex justify-between px-3 py-4 text-fontWhite">
            <button
                className="px-4 py-3 font-medium bg-grey-400 drop-shadow-button"
                onClick={() => setOpen((i: boolean) => !i)}
            >
                Search for places
            </button>
            <button className="bg-grey-400 rounded-full p-2 text-2xl h-fit text-center flex items-center justify-center drop-shadow-button">
                <i className="bx bx-current-location"></i>
            </button>
        </div>
    );
};

export default SearchBar;
