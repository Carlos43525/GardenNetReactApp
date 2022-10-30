import React from 'react'
import { OverviewStatCards, TodaysForecast, WeeklyForecast } from '../components'

const Overview = () => {
    return (
        <div className='container mx-auto'>
            <div className="pt-4 pb-8">
                <h1 className='pb-2 text-3xl font-bold'>House Plants</h1>
                <p className="text-xl font-semibold text-gray-400">Tuesday, October 25th</p>
            </div>
            <div class="grid overflow-hidden grid-cols-2 grid-rows-4 gap-10 pb-8">
                <div class="flex justify-between items-start space-x-4 row-span-1 col-span-1 max-h-32">
                    <OverviewStatCards />
                    <OverviewStatCards />
                    <OverviewStatCards />
                </div>
                <div class="row-span-1 col-span-1">
                    <TodaysForecast />
                </div>
                <div class="box row-start-2 row-span-3 col-span-1">3</div>
                <div class="row-start-2 row-span-3 col-span-1">
                    <WeeklyForecast />
                </div>
            </div>
        </div>
    )
}

export default Overview