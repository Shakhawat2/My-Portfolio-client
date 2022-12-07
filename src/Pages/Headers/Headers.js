import React, { useState } from "react";
import Typewriter from 'typewriter-effect';

function Headers() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-gray-100 relative    overflow-y-hidden" style={{minHeight : '700px'}}>
            {/* Code block starts */}
            <dh-component>
                <div class="absolute hidden md:block -bottom-12 -left-32 w-96 h-96">
                    <div class="absolute z-20 text-xl text-extrabold right-12 text-start top-1/4">
                        <span class="text-7xl">
                            🎨
                        </span>
                        <p>
                            Got a project ?
                        </p>
                        <a href="#" class="underline">
                            Let&#x27;s talk
                        </a>
                    </div>
                    <svg viewBox="0 0 200 200" class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFDBB9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)">
                        </path>
                    </svg>
                </div>
                <nav className="w-full border-b">
                    <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                        <div aria-label="Home. logo" role="img">
                            <img className="w-12" src="https://e7.pngegg.com/pngimages/651/48/png-clipart-web-development-responsive-web-design-web-developer-software-developer-outgoing-web-design-logo.png" alt="logo" />
                        </div>
                        <div>
                            <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                                <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </button>
                            <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                                <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                                    <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Home</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="javascript: void(0)">Project</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="javascript: void(0)">About Me</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="javascript: void(0)">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-orange-300 hover:text-white rounded border border-orange-300 text-orange-300 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button>
                    </div>
                </nav>
                <div className="bg-gray-100">
                    <div className="container mx-auto  py-12 sm:py-24">
                        {/* <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                The Freedom to Create the
                                <span className="text-indigo-700">Websites</span>
                                You Want
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">About me</button>
                        </div> */}
                        <div class="flex flex-col">
                            {/* <img src="https://i.ibb.co/m5FXZNM/40.jpg" class="mx-auto rounded-full w-28" /> */}
                            <p class="my-6 text-3xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                <Typewriter
                                    options={{
                                        strings: ['Hi There 🤘','My name is Shakhawat Hossain','I am a Front-End Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                            <h2 class="max-w-3xl py-2 mx-auto  sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-center text-gray-400 leading-7 md:leading-10">
                            A <span className="text-orange-300">Front-End Developer</span> passionate about creating interactive applications and experience on the web
                            </h2>
                            {/* <p className="max-w-3xl py-2 mx-auto mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center  ">A <span>Front-End Developer</span> passionate about creating interactive applications and experience on the web</p> */}
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Headers;