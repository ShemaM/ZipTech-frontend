/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, linkName, icon }) => (
  <Link to={to} className='flex px-5  py-5'>
    <span className='text-green-500'>{icon}</span>
    <span className='pl-8 text-gray-50'>{linkName}</span>
  </Link>
);

export default SidebarItem;
