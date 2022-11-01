import { GiCube } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Overview', 
                active: true,
                icon: <GiCube />,
            },
        ],
    },
    {
        title: 'Monitor',
        links: [
            {
                name: 'HousePlants', 
                active: true,
                icon: <RiPlantFill />,
            },
            {
                name: 'GardenPlants', 
                active: false,
                icon: <GiCube />, 
            }
        ],

    },
    {
        title: 'Manage',
        links: [
            {
                name: 'Plants', 
                active: false,
                icon: <GiCube />, 
            },
            {
                name: 'Devices', 
                active: false,
                icon: <GiCube />, 
            }
        ],
    },
]