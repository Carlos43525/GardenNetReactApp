import React from 'react'
import { HousePlantsStatCard, HousePlantsTempChart, PlantsList, WaterList } from '../components';

const HousePlants = () => {
  return (
    <div className='container mx-auto'>
      <div className="pt-4 pb-8">
        <h1 className='pb-2 text-3xl font-bold'>House Plants</h1>
        <p className="text-xl font-semibold text-gray-400">Tuesday, October 25th</p>
      </div>
      <div class="grid overflow-hidden grid-cols-2 grid-rows-3 gap-10 h-[34rem] pb-8">
        <div class="row-span-1 col-start-1 ">
          <HousePlantsStatCard />
        </div>

        <div class="row-span-3 col-start-2 col-span-2 overflow-scroll">
          <WaterList />
        </div>

        <div class="row-start-2 row-span-2">
        <HousePlantsTempChart />
        </div>
      </div>

      <div className="overflow-scroll h-[34rem]">
        <PlantsList />
      </div>
    </div>
  )
}

export default HousePlants