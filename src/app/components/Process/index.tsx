import React from 'react'

const Process = () => {
    return (
        <React.Fragment>
            <section id="process" className="spy">
                <div className="container">
                    <div className="max-w-[760px]">
                        <h3
                            className="visible-slowly-right text-4xl md:text-5xl lg:text-7xl text-w1 mb-5"
                        >
                            Process
                        </h3>
                        <p className="text-w1/80 text-xl md:text-2xl tracking-wider">
                            Whether you need a complete design overhaul or enhancements to an
                            existing product, my goal is to deliver a visually stunning and
                            user-friendly solution that meets your specific needs.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-8 lg:mt-10">
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="md:h-150 border border-p1/70">
                                <div className="border-b border-p1/70">
                                    <h3 className="h1 text-p1 p-4 md:p-6 lg:p-8">01</h3>
                                    <h3 className="h1 text-p1 p-4 md:p-6 lg:p-8">Research</h3>
                                </div>

                                <div
                                    className="flex flex-col justify-end items-end h-50 md:h-[360px]"
                                >
                                    <p className="text-xl md:text-2xl text-w1/80 p-4 md:p-6 xl:p-8">
                                        We listen to user stories to understand pain points and give a
                                        rough estimate about cost and time-frame.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-end overflow-hidden">
                                <div
                                    className="border border-p1/70 flex flex-col justify-between h-50 hover:h-full md:h-[352px] md:hover:h-150 duration-500 ease-in-out group"
                                >
                                    <div
                                        className="flex flex-col justify-between group-hover:border-b border-p1/70"
                                    >
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            02
                                        </h3>
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            Execution
                                        </h3>
                                    </div>
                                    <p
                                        className="text-xl md:text-2xl text-w1/80 p-4 md:p-6 xl:p-8 translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"
                                    >
                                        Execution We’ll test carefully with A/B, accessiable,
                                        usability, etc to ensure best quality as possible before hand
                                        over to client.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden">
                                <div
                                    className="border border-p1/70 flex flex-col justify-between h-50 hover:h-full md:h-[352px] md:hover:h-150 duration-500 ease-in-out group"
                                >
                                    <div
                                        className="flex flex-col justify-between group-hover:border-b border-p1/70"
                                    >
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            03
                                        </h3>
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            Strategy
                                        </h3>
                                    </div>
                                    <p
                                        className="text-xl md:text-2xl text-w1/80 p-4 md:p-6 xl:p-8 -translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"
                                    >
                                        Strategy Coding will implement at this step, by using combine
                                        new tech as Webflow, iOs, etc. We turn design into
                                        live.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-end overflow-hidden">
                                <div
                                    className="border border-p1/70 flex flex-col justify-between h-50 hover:h-full md:h-[352px] md:hover:h-150 duration-500 ease-in-out group"
                                >
                                    <div
                                        className="flex flex-col justify-between group-hover:border-b border-p1/70"
                                    >
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            04
                                        </h3>
                                        <h3
                                            className="h1 text-w1 group-hover:text-p1 duration-500 p-4 md:p-6 lg:p-8"
                                        >
                                            Testing
                                        </h3>
                                    </div>
                                    <p
                                        className="text-xl md:text-2xl text-w1/80 p-4 md:p-6 xl:p-8 translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"
                                    >
                                        We’ll test carefully with A/B, accessiable, usability, etc to
                                        ensure best quality as possible before hand over to client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Process