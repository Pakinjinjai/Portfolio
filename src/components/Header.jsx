import React from 'react';
// import { Mongodb, Nodejs, Profile, Reactjs, Redux } from "../assets";


const Header = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8
    gap-10 2xl:gap-20 py-20'>
        <div className='dlex dlex-col mb-20 lg:mb-0'>
            <span className='text-lg font-bold text-rose-700'>FULL-STACK DEVELOPER</span>
            <div
            className='flex gap-4 items-center my-4'
            >
                <h1 
                    className='text-gray-800 dark:text-neutral-100 
                    text-5xl 2xl:text-7xl font-bold text-center'
                >
                    I'm a
                </h1>
                <div
                className='flex items-center justify-center
                text-white shadow-lg bg-blue-800 dark:bg-[#224cff10]
                dark:text-[#224cff] rounded-full'
                >
                    <p
                    className='text-3xl 2xl:text-5xl font-bold px-5
                    py-2 pb-2 text-center'
                    >
                        Developer
                    </p>                            
                </div>
            </div>
            <h1
            className='text-5xl 2xl:text-7xl font-extrabold
            text-black dark:text-neutral-100 tracking-wider'
            >
                Pakin Jinjai
            </h1>
        </div>
    </div>
  )
}

export default Header
