import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

const underWateredData = {
    labels: ['Watered', 'Needs Watered'],
    datasets: [
        {
            label: '# of Votes',
            data: [3, 1],
            backgroundColor: [
                'rgba(0, 108, 255, 1)',
                'rgba(238, 238, 238, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const needsFertilizedData = {
    labels: ['Fertilized', 'Needs Fertilized'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 4],
            backgroundColor: [
                'rgba(70, 168, 179, 1)',
                'rgba(238, 238, 238, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const HousePlantsStatCard = () => {

    ChartJS.register(ArcElement);

    return (
        <div className='bg-white shadow-md rounded-xl py-6'>
            <div className="flex justify-around items-center">
                <div className='flex space-x-8'>
                    <div className='h-16 w-16'>
                        <Doughnut
                            data={underWateredData}
                            width={50}
                            height={50}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                },
                                maintainAspectRatio: false
                            }} />
                    </div>
                    <div>
                        <p className='font-semibold'>Underwatered</p>
                        <p className='text-2xl font-bold '>25%</p>
                    </div>
                </div>
                <div className='flex space-x-8'>
                    <div className='h-16 w-16'>
                        <Doughnut
                            data={needsFertilizedData}
                            width={100}
                            height={100}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                },
                                maintainAspectRatio: false
                            }} />
                    </div>
                    <div>
                        <p className='font-semibold'>Needs Fertilized</p>
                        <p className='text-2xl font-bold'>4</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default HousePlantsStatCard