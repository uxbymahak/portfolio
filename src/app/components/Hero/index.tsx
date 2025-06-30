"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';

const Hero = () => {
    return (
        <React.Fragment>
            <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] spy">
                <div className="flex items-center justify-center h-full w-full">

                    <Swiper className="portfolio-slide"
                        modules={[Autoplay]} // Add Autoplay module
                        autoplay={{
                            delay: 100, // 3 seconds delay
                            disableOnInteraction: false, // Continue autoplay after user interaction
                            pauseOnMouseEnter: true, // Pause on hover (optional)
                        }}
                        loop={true} // Infinite loop
                        speed={8000} // Animation speed (ms)
                    >
                        <div className="swiper-wrapper">
                            <SwiperSlide className="max-w-max">
                                <h1
                                    className="max-w-max text-w1 text-5xl sm:text-7xl lg:text-9xl xl:text-[150px] xxl:text-[200px] text-center text-nowrap"
                                >
                                    <span className="px-4 py-2 w-max">DIGITAL PORTFOLIO</span>
                                </h1>
                            </SwiperSlide>
                            <SwiperSlide className="max-w-max">
                                <h1
                                    className="max-w-max text-w1 text-5xl sm:text-7xl lg:text-9xl xl:text-[150px] xxl:text-[200px] text-center text-nowrap"
                                >
                                    <span className="px-4 py-2 w-max">DIGITAL PORTFOLIO</span>
                                </h1>
                            </SwiperSlide>
                            <SwiperSlide className="max-w-max">
                                <h1
                                    className="max-w-max text-w1 text-5xl sm:text-7xl lg:text-9xl xl:text-[150px] xxl:text-[200px] text-center text-nowrap"
                                >
                                    <span className="px-4 py-2 w-max">DIGITAL PORTFOLIO</span>
                                </h1>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <div
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-2 w-full max-w-[500px] bg-[#D9D8D8]/14 backdrop-blur-sm shadow-[0_0px_15px_rgba(255,255,255,0.2)] border border-w1/10 p-3 md:p-5 lg:p-10 rounded"
                >
                    <h2 className="visible-slowly-right text-3xl md:text-4xl lg:text-6xl text-center mt-3 md:mt-5">
                        Hi, I'm Mahak
                    </h2>
                    <span className="text-lg text-center block mb-3 md:mb-5">Frontend UX Designer</span>
                    <div className="flex items-center justify-center">
                        <img src="/assets/images/avatar.png" alt="..." className="rounded" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero