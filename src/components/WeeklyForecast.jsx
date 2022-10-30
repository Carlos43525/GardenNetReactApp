import React from 'react'

const WeeklyForecast = () => {
    return (
        <div className='bg-white shadow-md rounded-xl text-slate-900 text-xl p-8'>
            {/* Card Title */}
            <p className='border-b pb-4 text-2xl'>Forecast</p>

            {/* Replace placeholders with map */}
            <div className="flex justify-between items-center border-b py-4">
                <div>
                    <div className='text-sm text-gray-500'>October 31</div>
                    <div>Wednesday</div>
                </div>
                <div className='flex items-center space-x-8' >
                    <div className='h-10 w-10 bg-black rounded-2xl'></div>
                    <div>22&deg;/55&deg;</div>
                </div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div>
                    <div className='text-sm text-gray-500'>October 31</div>
                    <div>Wednesday</div>
                </div>
                <div className='flex items-center space-x-8' >
                    <div className='h-10 w-10 bg-black rounded-2xl'></div>
                    <div>22&deg;/55&deg;</div>
                </div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div>
                    <div className='text-sm text-gray-500'>October 31</div>
                    <div>Wednesday</div>
                </div>
                <div className='flex items-center space-x-8' >
                    <div className='h-10 w-10 bg-black rounded-2xl'></div>
                    <div>22&deg;/55&deg;</div>
                </div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div>
                    <div className='text-sm text-gray-500'>October 31</div>
                    <div>Wednesday</div>
                </div>
                <div className='flex items-center space-x-8' >
                    <div className='h-10 w-10 bg-black rounded-2xl'></div>
                    <div>22&deg;/55&deg;</div>
                </div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div>
                    <div className='text-sm text-gray-500'>October 31</div>
                    <div>Wednesday</div>
                </div>
                <div className='flex items-center space-x-8' >
                    <div className='h-10 w-10 bg-black rounded-2xl'></div>
                    <div>22&deg;/55&deg;</div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyForecast