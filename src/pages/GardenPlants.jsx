import React from 'react';
import { QuickStats, RainfallChart, TodayForecast, TodaysForecast, WeeklyForecast } from '../components'



const GardenPlants = () => {
  return (
    <div className='container mx-auto'>
      <div className="pt-4 pb-8">
        <h1 className='pb-2 text-3xl font-bold'>House Plants</h1>
        <p className="text-xl font-semibold text-gray-400">Tuesday, October 25th</p>
      </div>
      <div class="grid overflow-hidden grid-cols-2 grid-rows-auto gap-8 pb-8">
        <div class="flex justify-between items-start row-span-1 col-span-1  space-x-8 max-h-32">
          <QuickStats />
          <QuickStats />
          <QuickStats />
        </div>
        <div class="row-span-1 col-span-1 ">
          <TodaysForecast />
        </div>
        <div class="row-start-2 row-span-3 col-span-1">
          <TodayForecast />
        </div>
        <div class="row-start-2 row-span-3 col-span-1">
          <WeeklyForecast />
        </div>
      </div>
    </div>

  )
}

export default GardenPlants