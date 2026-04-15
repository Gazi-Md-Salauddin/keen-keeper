import React from "react";
import Logo from "../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div className="navbar shadow-sm px-3">
                <div className="navbar-start md:hidden">
                    {/*humberger menu*/}
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
                                <NavLink to="/" className={({isActive}) => isActive ? "bg-green-800 text-white" : ""}>
                                    <IoIosHome />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Timeline" className={({isActive}) => isActive ? "bg-green-800 text-white" : ""}>
                                    <IoTimerOutline />
                                    Timeline
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className={({isActive}) => isActive ? "bg-green-800 text-white" : ""}>
                                    <ImStatsDots />
                                    Stats
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Logo*/}
                <div className="navbar-center md:navbar-start pl-4">
                    <img src={Logo} alt="Logo" />
                </div>

                {/*nav links for large screen*/}
                <div className="md:navbar-end">
                    <ul className="hidden md:flex gap-3 pr-4">
                        <li>
                            <NavLink to="/" className={({isActive}) =>`flex items-center p-2 gap-2 rounded-xl ${isActive ? "bg-green-800 text-white" : ""}`}>
                                <IoIosHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timeline" className={({isActive}) =>`flex items-center p-2 gap-2 rounded-xl ${isActive ? "bg-green-800 text-white" : ""}`}>
                                <IoTimerOutline />
                                Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stats" className={({isActive}) =>`flex items-center p-2 gap-2 rounded-xl ${isActive ? "bg-green-800 text-white" : ""}`}>
                                <ImStatsDots />
                                Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
