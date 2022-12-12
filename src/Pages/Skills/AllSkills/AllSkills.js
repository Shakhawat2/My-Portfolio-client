import React, { useEffect, useState } from 'react';

const AllSkills = () => {

    const skills = [
        {
            "id": "01",
            "name": "HTML",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png"
        },
        {
            "id": "02",
            "name": "CSS",
            "img": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
        },
        {
            "id": "03",
            "name": "TAILWIND",
            "img": "https://tailwindcss.com/_next/static/media/social-square.eab77323.jpg"
        },
        {
            "id": "04",
            "name": "JAVASCRIPT",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
        },
        {
            "id": "05",
            "name": "ES6",
            "img": "data:image/png;base64,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"
        },
        {
            "id": "06",
            "name": "REACT",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png"
        },
        {
            "id": "07",
            "name": "NODE JS",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAA8FBMVEX///8zMzNAiD8oKCiNjY1fmlduvU0uLi5yqmNhm1l2sWFon2F3tF8rKitspWBmoF14enh1tlx0t1lzrGMUFBQiIiJwu1JyuVaysrLw8e9amVHO3czF18PZ5Ni2zbOqqqo/hz4tgCxQkknm5+VcXFwAAAAbGxsPDg9PT0/s8utERURXV1fP0M94qHKXmZf09fSrx6dmaWabvZfBw8Fxc3GGsIFZnE2sy6dbokqtzqZAiTja29kwgS+80bmRtox8qnabwZHT5c2HwXGj0JRhtTs8PTy+3bRUm0afoZ9Rm0JhrUlaoEut0KXI38EXeRWevJ2NkvzNAAAIlklEQVR4nO2ca1vaSBSACXE2TVPEVuLiQDBGDUblIgjLesHerFZ36///NzszCblMJretSpTz9oOPkIbMy5mTM5dYqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvg52b8bIv4ZVwJjeOL5Z9Ea+CjZqkdM8Gy76MVwAxJUm1bn/Z11F+mClJ0vXmsq+k7HimJMk+Oln2tZQb35SkHICqNAJTkry27IspNWAqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2AqL2/E1GDjoMCcrfF5VGCNpbnDDs5nqn+4k//MS+CuIUtK93Qv18GDz7PNTWuY89RjydZt2vo8ppq6rNg35Z07Ht/orAH5lph+fPqwufmujtVWjoP39huK5C4ynClZpk6ObPqu0jjdLnT9L8XeccNvgyxnLTF9+fjxw3ti6p2KrJ6Tde6NrndqxT4KQkpsavvUv45ao4SJbOA3xsU+SlsRd75uffzgmlpXiatR6rl3SJ/2CX+KyFT/oBY+Qi/bJoYdO9QYt0Xds8TY//b9z08hU8QVvko89YnXpwXETY1l/mD7sEybGMSNqTXE6erH9z+2QqaYqjrWxOlqL+hL2aYuDu34QUp3oyybGJIbo0vx2P+y9f2PqKk6oqrqeCJIV2vdmvjUAlN8AggOs++erfFFWEu4PgYf+85X4okz5QYVYcqnq6bM9+kUU3exBBD6ykpQMZDKJbUx0dj/xjzxpuoLVXXcDp364kjQl5JMjaXEbMYuo7Gfr8h7NvrdjMaQ5kiLgwe3nqiYKeSr6vmnTupLQlPZBysHy70LHme2RpIai29zWL0Xm2KZiqla3zW8g8fZ30FganCQfbCyvwQ/AcVMWTjLFPZNNVN7E2dqu/H6TMm2zr8UNnUvNlVHXv+rppiqxTJiiinZ5i+jXKbIiG9vzBdXgalbjNNMkarKTDRFbg2xu2yiKVIXnPC1VZlMKV13SMoV7GFT1izVlJkYU6zc8MbJWaa8+20zWq+XyFTNn5kabIS/z8DUFHtBFTeFiaq6lWRKr3kj7mgxIDYV1HD9cBCWx5RyGHp9J9SgSO/DsyRTSEVmVWxKDg2L7kLxKjSlsym8Nqv4t4/86ytRlaCHJxnDlx41ZW2JTZGgsqpiU5HvoHIqmJ8Kf5xNfjd6SMV0PnVt4XXpA+WCpqak/z2ITVkYVZ/KlGNpBFXzTenK0idfipn6OSXgLXFMWVZOU4LZYd4Uoqa0nmcqaVLjRSlk6q+fD1RVNckUVXX55KZyz+s/L/sFTT08TC3zPskUcfU0pjAzxXpfWRYeipu6Nc1qUu8jqp7EVGVEVKmoTaqKg7IsZhU0NZvNSA8zZ0l5yrLOfz+j06rTuc69PPZCFDL19/1sdmtSVcVMSXJozrKZVU8pbgFclhnhBYVN0fsbCSqxKbMqNiXpi+dETyKze+IavSQpnKOgqXsWUkRVQkyZCaa8Ocvt026ecR8ZqJdvna9oTLmiquZtUj2VYIpGylq/wS0/JM+6ZC/NvjQFTZ17pqpmgikz0RRtfeyVlJm8sj39l2gqNLfrm/rn50IU6WYFavREAlOCqeS0pdklsB8aq0eGoDdBAPim/v3lm6qaH8Qx9Wux6DfOMeGr+6MU4YpjqR5W9k3xpXBomdI3VRnunvumqiJTl+fBSnLa4rH3mUd+KXAhXsTSldKkK8+UbMdLYX/pOzBVGVzv+plqGjN1vvsYPsFJ+hKeHH1kO74zwrW57NmWBcyUknBTHis6Z6pSMZDvije1e81XiynLwoLPFC9ml+VvKxBTacuz7L7eiL59dX7pBVXE1LlqxP9/0lYDpSEqLvlpdo/Gxm838wnYV/TUP7OyTZra4Bs1csPKfP/eN4WthG1BF8eCJffEzxzfxI5e/jq7y0bmWP3i8CAW/U6PujKxbyptq1lsS5TcSPlMPl2VZdLlf2NUL82q6fW+6XX69sV+eGtQ5naocLqS38If6uhcXpoWNYXXuT1mVyO+JwbjPcU+zOxLfrqSyzAr/BTMdy/X361PO9FX2yoi/9rcsd6KsGjrmoATmq5I8JWpRv8tHG13+jnalYwe0ogoDfX4O2FT1+Vu7r11O3Z3vySF1NNgRBPUYI41DQ+dIf0x59LR4K5fJEZKccN7LjpY1TDL7s4Eayou2fxuaWipSEP+DmJDC/8GBDjXNEGFb3pXNF1l1A+rx4AuO2HuwSzhiytOUvhEA23QEowMV4pWSkpykxczZHQcJ/35mrfOMP02N6Q3RFqddozRpNJJPO7t41ga4kunCIM50vCgYhjGaFRZ5cKhhdSsQOmoqFUZtFvGfMVNIX+QZxhucLWG8/l81Fkk8DYipkjvqzjDVS4aQqYMy6Lh1WYPhxCw9zCpa4r466x0xRA2xTriFcnwdNM1RppmsbDyTK06MVNYQ48sloxrlW4WA1MevKkW0iaL90iJTp2BKUbclOrXlx3Lou+BKQZvyiBpari46zmsG4IpRixP9VSS0bE2GbajVcLKEzM1mJDxC914jxAaQUwFxEzRsfBEw8QTCS7I6AECUwzHaM9JyrqugCkP3tTjKJhaMcjYuAKmPHhTmmoFYxYMpgJ4U3M1qKdIFUqLdDDF4E3R+apJ23AcozVEGpsaBlOM+AjZUjXEID/n9HUwxYjf+5wJZg9wk/LTfQdMMYRVgtG+6ly1FtN2YIpBn8Xz1qkM8URx25tSWHkmaLGzhYRXfA8j3f3ipiuArVPNnYqjabFeRne/wFYOH7azBdHZYMS9MyT3P+HfOltZDI0Oh1UcXU5vqaItZ6tOazSZRNeo4rtfgBDOQhZsdEnFeURe9u7A5qlUFhvxYENeNiyWNJqgVnlXSy5IfqKTwqm7XwAXY9KbQGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQHv4DQsQW/do1c4YAAAAASUVORK5CYII="
        },
        {
            "id": "08",
            "name": "EXPRESS JS",
            "img": "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"
        }
    ]

    return (
        <div className="bg-gray-100 ">
            <div className="relative px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">

                <div>
                    <h1 className='text-2xl text-left mb-10  font-bold text-orange-500'>About My Skill</h1>
                </div>

                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                    <svg
                        viewBox="0 0 88 88"
                        className="w-full max-w-screen-xl text-indigo-100"
                    >
                        <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="44"
                        />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="37.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="29.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="22.5"
                        />
                    </svg>
                </div>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        skills.map(skill => <div key={skill.id} className="p-5 flex flex-col justify-center items-center  text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                            <img src={skill?.img} className='w-16 ' alt="" />
                            <p className="font-semibold mt-5 text-gray-200">
                                {skill.name}
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllSkills;