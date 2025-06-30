"use client"
import React, { useEffect, useState } from 'react';
const About = () => {
    return (
        <React.Fragment>
            <section id="about" className="banner-parallax spy">
                <div className="container">
                    <div className="max-w-[760px]">
                        <h3
                            className="visible-slowly-right text-4xl md:text-5xl lg:text-7xl text-w1 mb-5"
                        >
                            About Me
                        </h3>
                        <p className="text-w1/80 text-xl md:text-2xl tracking-wider">
                            As a dedicated UI/UX designer with a passion for creating intuitive
                            and visually compelling user experiences, I thrive on the
                            intersection of Creativity and technology. With a keen eye for
                            detail and a commitment to user-centric design.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-8 md:mt-10 lg:mt-15"
                    >
                        <div
                            className="flex items-center gap-3 md:gap-5 border-t border-r border-w1/30 p-5 lg:p-10 rounded"
                        >
                            <h4
                                className="text-3xl md:text-5xl lg:text-7xl font-bold text-w1 flex items-center gap-1"
                            >
                                <span className="odometer">5</span>
                                <span>+</span>
                            </h4>
                            <span className="text-w1/80 text-base md:text-xl lg:text-2xl block"
                            >Years experience</span
                            >
                        </div>
                        <div
                            className="flex items-center gap-3 md:gap-5 border-t border-r border-w1/30 p-5 lg:p-10 rounded"
                        >
                            <h4
                                className="text-3xl md:text-5xl lg:text-7xl font-bold text-w1 flex items-center gap-1"
                            >
                                <span className="odometer" data-counter-value="120">10</span>
                                <span>+</span>
                            </h4>
                            <span className="text-w1/80 text-base md:text-xl lg:text-2xl block"
                            >Happy customer</span
                            >
                        </div>
                        <div
                            className="flex items-center gap-3 md:gap-5 border-t border-r border-w1/30 p-5 lg:p-10 rounded"
                        >
                            <h4
                                className="text-3xl md:text-5xl lg:text-7xl font-bold text-w1 flex items-center gap-1"
                            >
                                <span className="odometer" data-counter-value="800">25</span>
                                <span>+</span>
                            </h4>
                            <span className="text-w1/80 text-base md:text-xl lg:text-2xl block"
                            >Completed Project</span
                            >
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About