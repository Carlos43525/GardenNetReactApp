import React from 'react'

const TodaysForecast = () => {
  return (
    <div className='bg-white shadow-md rounded-xl p-6 text-gray-500 h-36'>
      <p>Sunny</p>
      <div className="flex items-center space-x-6">
        <div className='flex items-center justify between'>
          <div className=' border-gray-900 border-r-2'><span className='text-gray-900 text-6xl pr-4'>25&deg;</span></div>
          <div className=''></div>
        </div>
        <div className="text-lg font-semi">
          Tuesday, October 11
          <div>
            Shelbyville
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodaysForecast