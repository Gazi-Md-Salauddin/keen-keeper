import React from 'react'
import StatCard from '../StatCard/StatCard'

const Banner = () => {
  return (
    <div>
      <div className="text-center pt-16 space-y-4 px-3">
        <h1 className="text-2xl font-bold">Friends to keep close in your life</h1>
        <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.</p>
        <button className="bg-green-800 text-white rounded-xl p-2">+ Add a Friend</button>
      </div>
      <StatCard/>
    </div>
    
  )
}

export default Banner