import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Friends from './components/Friends/Friends'
import Footer from './components/Footer/Footer'
import './App.css'

const getFriends = async() => {
  const res = await fetch("/friends.json")
  return res.json();
}

const friendsPromise = getFriends();

function App() {

  return (
    <>
          <Navbar/>
          <Banner/>
          <Friends friendsPromise={friendsPromise}/>
          <Footer/>
    </>
  )
}

export default App
