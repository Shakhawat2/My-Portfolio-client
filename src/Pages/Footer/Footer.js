import React from 'react';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container flex flex-col p-4 mx-auto md:p-8  divide-y">
                <h1 className='text-center text-4xl font-bold'>Shakhawat Hossain</h1>
                <p className='w-2/3 py-3 mx-auto text-center mt-4 text-slate-300'>Although I'm currently looking for Front End Developer position opportunities, <br /> My inbox is always open, Whether you have a question or just want to say hi, <br /> I'll try my best to get back to you! </p>
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                <span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved</span>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;