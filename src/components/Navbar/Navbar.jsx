import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <div className="navbar shadow-sm">
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
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Timeline</a>
                            </li>
                            <li>
                                <a>Stats</a>
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
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Timeline</a>
                        </li>
                        <li>
                            <a>Stats</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
