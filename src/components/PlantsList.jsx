import React from 'react'
import PlantStatusTableRow from './PlantStatusTableRow'

const PlantsList = () => {
  return (
    <div className='bg-white shadow-md rounded-xl p-4'>
    <h3 className='font-semibold text-xl py-2 px-5'>All House Plants</h3>
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-400 uppercase">
            <tr className='border-b'>
                <th class="py-3 px-6">
                    ID
                </th>
                <th class="py-3 px-6">
                    Plant
                </th>
                <th class="py-3 px-6">
                    Location
                </th>
                <th class="py-3 px-6">
                    Soil Moisture
                </th>
                <th class="py-3 px-6">
                    Fertilizer Status
                </th>
                <th class="py-3 px-6">
                    Date Planted
                </th>
            </tr>
        </thead>
        <tbody className='text-slate-900'>
            <PlantStatusTableRow />
            <PlantStatusTableRow />
            <PlantStatusTableRow />
            <PlantStatusTableRow />
            <PlantStatusTableRow />
            <PlantStatusTableRow />
            <PlantStatusTableRow />
        </tbody>
    </table>
    </div>
  )
}

export default PlantsList