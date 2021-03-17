import React from 'react';
import Sidebar from '../components/Sidebar';

const OverviewScreen = () => (
  <>
    <div className='bg-gray-200 mt-12 grid grid-cols-6'>
      <div>
        <Sidebar />
      </div>
      <div className='col-span-5'>
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
  </>
);

export default OverviewScreen;
