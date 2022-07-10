import React from 'react';

const MenuItem = ({ city }: { city: string }) => {
    return (
        <div className="w-full flex flex-row justify-between items-center border-[1px] border-transparent hover:border-grey-400 text-white py-3 px-3 pr-1 transition duration-150 mb-2">
            <p>{city}</p>
            <span className="text-grey-400">
                <i className="bx bx-chevron-right text-2xl"></i>
            </span>
        </div>
    );
};

export default MenuItem;
