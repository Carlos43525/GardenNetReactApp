import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbPlant2 } from 'react-icons/tb';
import { FiMenu } from 'react-icons/fi';
import { GiCube } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';


import { useStateContext } from '../contexts/ContextProvider';

import '../sidebar.css';
import '../dist/output.css';
import { links } from '../assets/links';



// ml-4 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  //const activeMenu = true;

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 m-2 hover:bg-light-gray';

  return (
    <div className='ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='/Overview' onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 mt-4 flex text-xl font-semi-bold text-slate-900'>
            <span>Garden Net</span>
          </Link>
          <button type='button'
            onClick={() => setActiveMenu(
              (prevActiveMenu) => !prevActiveMenu)}
            className='text-xl p-3 mt-4 block xl:hidden hover:bg:light-gray'>
            <FiMenu />
          </button>
        </div>
        <div className='mt-10'>
          {/* Replace with link.map later */}

          <div>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
              Dashboard
            </p>
            <NavLink
              to={'/Overview'}
              onClick={handleCloseSideBar}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }>
              <span className='text-xl'><GiCube /></span>
              <span className='capitalize'>
                Overview
              </span>
            </NavLink>
          </div>

          <div>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
              Monitor
            </p>
            <NavLink
              to={'/HousePlants'}
              onClick={handleCloseSideBar}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }>
              <span className='text-xl'><GiCube /></span>
              <span className='capitalize'>
                House Plants
              </span>
            </NavLink>
            <NavLink
              to={'/GardenPlants'}
              onClick={handleCloseSideBar}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }>
              <span className='text-xl'><GiCube /></span>
              <span className='capitalize'>
              Garden Plants
              </span>
            </NavLink>
            <p className={normalLink}>
              <span className='text-xl text-gray-300'><GiCube /></span>
              <span className='capitalize text-gray-300'>
                Garden Plants
              </span>
            </p>
          </div>

          <div>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
            Manage
            </p>
            <p className={normalLink}>
              <span className='text-xl text-gray-300'><GiCube /></span>
              <span className='capitalize text-gray-300'>
                Plants
              </span>
            </p>
            <p className={normalLink}>
              <span className='text-xl text-gray-300'><GiCube /></span>
              <span className='capitalize text-gray-300'>
              Devices
              </span>
            </p>
          </div>

        </div>
      </>)}
    </div>
  )
}


// {links.map((item) => (
//   <div key={item.title}>
//     <p className='text-gray-400 m-3 mt-4 uppercase'>
//       {item.title}
//     </p>
//     {item.links.map((link) => {
      // <NavLink
      //   to={`/${link.name}`}
      //   key={link.name}
      //   onClick={handleCloseSideBar}
      //   className={({ isActive }) =>
      //     isActive ? activeLink : normalLink
      //   }>
//         <span className='text-xl'>{link.icon}</span>
//         <span className='capitalize'>
//           {link.name}
//         </span>
//       </NavLink>
//     }
//     )}
//   </div>
// ))}

export default Sidebar