import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="z-10 py-3 lg:py-4 w-full bg-b1 px-3 sticky top-0 border-b border-b-w1/30">
            <div className="max-w-[1700px] mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-serif font-bold">Mahak Saxena</span>
                    </div>
                </Link>
                <div>
                    <ul className="menu">
                        <li className="flex items-center justify-between mb-10">
                            <Link
                                className="text-3xl font-serif font-bold block lg:hidden"
                                href="/"
                            >
                                Mahak Saxena
                            </Link>
                            <button
                                className="topbar-btn text-w1 border-p1 menu-btn flex items-center justify-center lg:hidden"
                            >
                                <i className="hgi hgi-stroke hgi-cancel-01"></i>
                            </button>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="/"
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="#about"
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="#work"
                            >Work</Link>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="#services"
                            >Service</Link>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="#process"
                            >Process</Link>
                        </li>
                        <li>
                            <Link
                                className="py-2 inline-flex uppercase hover:text-p1 duration-300"
                                href="#footer"
                            >Contact</Link>
                        </li>
                    </ul>
                    <button
                        className="topbar-btn bg-p1 text-w1 border-p1 menu-btn block lg:hidden"
                    >
                        <span className="flex items-center justify-center">
                            <i className="hgi hgi-stroke hgi-sharp hgi-menu-01"></i>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;