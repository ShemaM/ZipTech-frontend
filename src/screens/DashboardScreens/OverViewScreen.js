import React from 'react';
import NavBar from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const OverViewScreen = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <div className='bg-gray-200 mt-12 grid grid-cols-4'>
        <div className='bg-gray-900 h-screen w-64 fixed'>
          <Sidebar />
        </div>
        <div className='col-span-6 h-screen border-2 ml-64 border-red-500'>
          <ul>
            <li>
              <img src='' alt='' />
            </li>
            <li className='text-gray-900 text-center'>
              <span>500</span>
              <span>Subscribers</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </>
);

export default OverViewScreen;
