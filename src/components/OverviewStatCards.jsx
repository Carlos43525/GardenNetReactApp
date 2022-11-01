import React from 'react'

const OverviewStatCards = () => {
    return (
        <div className='bg-white shadow-md rounded-xl'>
            <div class="flex items-center h-32 w-52 p-4 text-gray-900 whitespace-nowrap">
                <div class="w-12 h-12 rounded-xl bg-slate-600"></div>
                <div class="pl-4">
                    <div class="text-base font-semibold">Devices</div>
                    <div class="font-normal text-gray-500">6/6</div>
                </div>
            </div>
        </div>
    )
}

export default OverviewStatCards