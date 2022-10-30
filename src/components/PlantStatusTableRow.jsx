import React from 'react'

const PlantStatusTableRow = () => {
    return (
        <tr class="bg-white border-b hover:bg-gray-50">
            <td class="p-4 w-4">
                <div class="flex items-center">
                    <div className="py-3 px-2">1</div>
                </div>
            </td>
            <th class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                <div class="w-10 h-10 rounded-xl bg-slate-600"></div>
                <div class="pl-3">
                    <div class="text-base font-semibold">Lipstick Plant</div>
                    <div class="font-normal text-gray-500">Aeschynanthus Radicans</div>
                </div>
            </th>
            <td class="py-4 px-6">
                Office
            </td>
            <td class="py-4 px-6">
                <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Good
                </div>
            </td>
            <td class="py-4 px-6">
                10/05/2022
            </td>
        </tr>
    )
}

export default PlantStatusTableRow