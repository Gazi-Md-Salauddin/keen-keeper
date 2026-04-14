import React from 'react'

const StatCard = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center mt-6">
      <div className="text-center shadow rounded p-4">
        <h2 className="text-xl font-bold">10</h2>
        <p>Total Friends</p>
      </div>
      <div className="text-center shadow rounded p-4">
        <h2 className="text-xl font-bold">3</h2>
        <p>On Track</p>
      </div>
      <div className="text-center shadow rounded p-4">
        <h2 className="text-xl font-bold">6</h2>
        <p>Need Attention</p>
      </div>
      <div className="text-center shadow rounded p-4">
        <h2 className="text-xl font-bold">12</h2>
        <p>Interaction This Month</p>
      </div>
    </div>
  )
}

export default StatCard