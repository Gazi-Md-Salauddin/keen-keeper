import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Timeline from "./components/Timeline/Timeline";
import Stats from "./components/Stats/Stats";

const getFriends = async () => {
    const res = await fetch("/friends.json");
    return res.json();
};

const friendsPromise = getFriends();

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Banner />
                            <Friends friendsPromise={friendsPromise} />
                        </>
                    }
                />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
