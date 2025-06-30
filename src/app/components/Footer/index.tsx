import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="border-t border-w1/30 bg-b2" id="footer">
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                        <div className="max-lg:border-b sm:border-r border-w1/30 spy">
                            <span className="text-w1 text-lg md:text-xl">INQUIRY</span>
                            <div className="flex flex-col mt-3 md:mt-5">
                                <a href="mailto:Mahak.Saxena2211@Gmail.Com" className="text-w1/80 text-xl md:text-2xl"><span className="__cf_email__" data-cfemail="84f7ebe9e1ebeae1c4e1fce5e9f4e8e1aae7ebe9">Mahak.Saxena2211@Gmail.Com</span></a>
                                <a href="tel:+91-9773765803" className="text-w1/80 text-xl md:text-2xl"
                                >+91-9773765803</a>
                            </div>
                        </div>
                        <div
                            className="max-lg:border-b lg:border-r border-w1/30 sm:px-5 md:px-8 lg:px-10 spy"
                        >
                            <span className="text-w1 text-lg md:text-xl">LOCATION</span>
                            <div className="flex flex-col mt-3 md:mt-5">
                                <span className="text-w1/80 text-xl md:text-2xl"
                                >Noida, India</span>
                            </div>
                        </div>
                        <div className="px-0 lg:px-10 spy">
                            <span className="text-w1 text-lg md:text-xl">FOLLOW US</span>
                            <div className="flex gap-3 md:gap-5 mt-3 md:mt-5">
                                <Link
                                    href="javascript:void(0)"
                                    className="size-10 md:size-12 rounded-full border border-w1/30 hover:border-p1 hover:bg-p1 duration-300 flex items-center justify-center"
                                >
                                    <span
                                        className="text-w1 text-xl md:text-2xl flex items-center justify-center"
                                    >
                                        <i className="hgi hgi-stroke hgi-facebook-02"></i>
                                    </span>
                                </Link>
                                <Link
                                    href="javascript:void(0)"
                                    className="size-10 md:size-12 rounded-full border border-w1/30 hover:border-p1 hover:bg-p1 duration-300 flex items-center justify-center"
                                >
                                    <span
                                        className="text-w1 text-xl md:text-2xl flex items-center justify-center"
                                    >
                                        <i className="hgi hgi-stroke hgi-new-twitter"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer