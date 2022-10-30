import { GiCube } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Overview', 
                icon: <GiCube />,
            },
        ],
    },
    {
        title: 'Monitor',
        links: [
            {
                name: 'HousePlants', 
                icon: <RiPlantFill />,
            },
            {
                name: 'GardenPlants', 
                icon: <GiCube />, 
            }
        ],

    },
    {
        title: 'Manage',
        links: [
            {
                name: 'Plants', 
                icon: <GiCube />, 
            },
            {
                name: 'Devices', 
                icon: <GiCube />, 
            }
        ],
    },
]