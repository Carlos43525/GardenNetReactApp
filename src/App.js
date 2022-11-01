import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { Navbar, Header, Sidebar } from './components';
import { Overview, Devices, GardenPlants, HousePlants, Plants } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './input.css';
import './dist/output.css';

const App = () => {
  const { activeMenu } = useStateContext();

  // const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
          <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Helmet>
          <div className='flex relative'>
            {/* Active menu or not */}
            {activeMenu ? (
              <div className='w-72 fixed sidebar bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0'>
                {/* Sidebar w-0 */}
              </div>
            )}
            <div className={`w-full bg-main-bg min-h-screen 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }>

              {/* Navbar */}
              <div className='fixed md:static bg-main-bg navbar w-full'>
                <Navbar />
              </div>

              {/* Routing */}
              <div>
                <Routes>
                  <Route path='/overview' element={<Overview />} />

                  {/* Monitor */}
                  <Route path='/houseplants' element={<HousePlants />} />
                  <Route path='/gardenplants' element={<GardenPlants />} />

                  {/* Manage */}
                  {/* <Route path='/plants' element={<Plants />} />
                  <Route path='/devices' element={<Devices />} /> */}
                </Routes>
              </div>
            </div>
          </div >
      </BrowserRouter>
    </div>

  )
}

export default App