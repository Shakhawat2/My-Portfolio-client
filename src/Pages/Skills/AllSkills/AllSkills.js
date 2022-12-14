import React from "react";
import html from "../../../assest/icons/html.png";
import css from "../../../assest/icons/css.png";
import Bootstrap from "../../../assest/icons/Bootstrap.png";
import Tailwind from "../../../assest/icons/Tailwind.png";
import mui from "../../../assest/icons/mui.png";
import javascript from "../../../assest/icons/javascript.png";
import reactjs from "../../../assest/icons/reactjs.png";
import php from "../../../assest/icons/php.png";
import reactBootstrap from "../../../assest/icons/reactBootstrap.png";
import firebase from "../../../assest/icons/firebase.png";
import expressjs from "../../../assest/icons/expressjs.png";
import nodejs from "../../../assest/icons/nodejs.png";
import mongodb from "../../../assest/icons/mongodb.png";
import Figma from "../../../assest/icons/Figma.png";
import git from "../../../assest/icons/git.png";
import gitHub from "../../../assest/icons/gitHub.png";
import vscode from "../../../assest/icons/vscode.png";
import ps from "../../../assest/icons/ps.png";
import ai from "../../../assest/icons/ai.png";
import camtasia from "../../../assest/icons/camtasia.png";

const skills = [
    { name: "Html", image: html },
    { name: "Css", image: css },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Tailwind", image: Tailwind },
    { name: "Material UI", image: mui },
    { name: "React Bootstrap", image: reactBootstrap },
    { name: "Javascript", image: javascript },
    { name: "React js", image: reactjs },
    { name: "php", image: php },
    { name: "firebase", image: firebase },
    { name: "express js", image: expressjs },
    { name: "node js", image: nodejs },
    { name: "mongodb", image: mongodb },
    { name: "Figma", image: Figma },
    { name: "git", image: git },
    { name: "gitHub", image: gitHub },
    { name: "vscode", image: vscode },
    { name: "Photoshop", image: ps },
    { name: "illustrator", image: ai },
    { name: "camtasia", image: camtasia },
];

const AllSkills = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        My Skills
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-orange-600 scale-x-30 hover:scale-x-100" />
                </h2>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                {skills.map((skill, idx) => (
                    <div key={idx} className="hover:border-b-2 py-5 border-red-600 rounded shadow-2xl">

                        <img className="mx-auto w-40 " src={skill.image} alt="" />
                        <h4 className="text-center hidden md:block font-semibold">
                            {skill.name.toUpperCase()}
                        </h4>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AllSkills;