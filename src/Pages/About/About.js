import React from 'react';

const About = () => {
    return (
        <div className="py-16 bg-slate-100" id='about'>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 mx-auto">
                        <img className='rounded-full w-96 h-96 mx-auto' title='Click Image' src="https://i.ibb.co/JrvT2sM/40-removebg-preview.png" alt="img" loading="lazy" width="" height="" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Hi, This is Shakhawat Hossain</h2>
                        <p className="mt-6 text-gray-600">I am passionate about building excellent web applications that improves the lives of those around me. I'm Specialized in creating web applications for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
                        <div className='mt-7'>
                            <a href="https://drive.google.com/file/d/1TNi8m1z7THXH-wkzN6QEtFWF5EebtTi2/view?usp=share_link" alt='' className='outline-none bg-orange-600 text-white font-bold rounded-md p-3'>
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;