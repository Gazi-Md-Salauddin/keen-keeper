import React from "react";
import Logo from "../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div>
            <div className="navbar shadow-sm px-3">
                <div className="navbar-start md:hidden">
                    <div className="dropdown md:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:hidden"
                        >
                            <li>
                                <a><IoIosHome />Home</a>
                            </li>
                            <li>
                                <a><IoTimerOutline />Timeline</a>
                            </li>
                            <li>
                                <a><ImStatsDots />Stats</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center md:navbar-start pl-4">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="md:navbar-end">
                    <ul className="hidden md:flex gap-3 pr-4">
                        <li>
                            <a className="flex items-center gap-2"><IoIosHome />Home</a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2"><IoTimerOutline />Timeline</a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2"><ImStatsDots />Stats</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
