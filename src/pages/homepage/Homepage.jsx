import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Friends from '../../components/Friends/Friends'
import StatCard from '../../components/StatCard/StatCard'
import { PulseLoader } from 'react-spinners'


const Homepage = () => {
  
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("/friends.json")
    .then(res => res.json())
    .then(friends => {
      setFriends(friends);
      setLoading(false)
    });
  }, []);
  
  if(loading) {
    return(
      <div className="flex justify-center items-center h-screen">
        <PulseLoader />
      </div>
      )
  }
  
  return (
    <div>
      <Banner/>
      <Friends friends={friends}/>
    </div>
  )
}

export default Homepage