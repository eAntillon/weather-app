import React, { useState } from 'react';
import { motion, useCycle } from 'framer-motion';

type props = {
    open: boolean;
    setOpen: Function;
};

const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-100%' },
};

const Menu: React.FC<props> = ({ open, setOpen }) => {
    const [lastSearched, setlastSearched] = useState([])
    return (
        <motion.div
            className="h-screen w-full bg-darkBlue fixed z-50 p-3"
            animate={open ? 'visible' : 'hidden'}
            initial={{ x: -100 }}
            variants={variants}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
            }}
        >
            <div className="w-full flex justify-end">
                <button
                    onClick={() => setOpen((i: boolean) => !i)}
                    className="flex justify-center items-center text-white    p-0 "
                >
                    <i className="bx bx-x text-3xl "></i>
                </button>
            </div>

            <div>
                <form className='flex flex-row justify-between mt-3'>
                    <div className='border-[1px] border-fontWhite px-3 py-2 text-grey-400 flex justify-center items-center'>
                        <i className="bx bx-search text-xl mr-2"></i>
                        <input type="text" placeholder="search location" className='bg-transparent py-1' />
                    </div>
                    <button type="submit" className='bg-purpleBlue text-white font-semibold px-4 py-3'>Search</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Menu;
