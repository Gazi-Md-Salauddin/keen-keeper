import React from 'react'
import Banner from '../../components/Banner/Banner'
import Friends from '../../components/Friends/Friends'
import StatCard from '../../components/StatCard/StatCard'
import { useLoaderData } from 'react-router-dom'

const Homepage = () => {
  
  const friends = useLoaderData();
  
  return (
    <div>
      <Banner/>
      <Friends friends={friends}/>
    </div>
  )
}

export default Homepage