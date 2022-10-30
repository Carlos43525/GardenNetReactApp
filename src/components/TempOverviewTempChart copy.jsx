import React from 'react'
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Placeholder Data',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['08:00', '12:00', '16:00', '20:00', '00:00', '04:00'];

const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        borderColor: 'rgba(226, 30, 30, 1)',
        backgroundColor: 'rgba(226, 30, 30, .5)',
        yAxisID: 'y',
      },
      {
        label: 'Humidity',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        borderColor: 'rgba(83, 205, 249, 1)',
        backgroundColor: 'rgba(83, 205, 249, .5)',
        yAxisID: 'y1',
      },
    ],
  };

const HousePlantsTempChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  return (
    <div className='bg-white shadow-md rounded-xl'>
      <div className='-mt-8 p-4'>
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default HousePlantsTempChart