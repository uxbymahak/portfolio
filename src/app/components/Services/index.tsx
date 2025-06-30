import React from 'react'

const Services = () => {
    return (
        <React.Fragment>
            <section id="services" className="overflow-hidden bg-b2">
                <div className="container spy">
                    <div className="max-w-[760px] mx-auto text-center">
                        <h3
                            className="visible-slowly-right text-4xl md:text-5xl lg:text-7xl text-w1 mb-5"
                        >
                            My Services
                        </h3>
                        <p className="text-w1/80 text-xl md:text-2xl tracking-wider">
                            I specialize in delivering high-quality solutions tailored to your
                            needs. From design to development, I bring creativity and technical
                            expertise to every project. Here’s how I can help you achieve your
                            goals:
                        </p>
                    </div>

                    <div
                        className="max-w-[800px] mx-auto menu__item-container flex flex-col gap-5 mt-5 md:mt-8 lg:mt-15"
                    >
                        <a href="#contact" className="menu__item">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="Web Design">Web Design</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                        <a href="#contact" className="menu__item block text-end">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="UX Design">UX Design</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                        <a href="#contact" className="menu__item block text-center">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="Branding">Branding</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                        <a href="#contact" className="menu__item block">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="Markating">Marketing</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                        <a href="#contact" className="menu__item block text-end">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="E-commerce">E-commerce</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                        <a href="#contact" className="menu__item block">
                            <div className="menu__item-container">
                                <div
                                    className="menu__item-text flip-animate text-w1/50 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
                                >
                                    <span data-hover="Maintenanc">Maintenanc</span>
                                </div>
                                <div className="menu__item-image"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services