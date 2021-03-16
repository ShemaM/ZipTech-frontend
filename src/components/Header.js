import React from 'react';
import { Cpu, AlignJustify, Circle, Bell } from 'react-feather';

const Header = () => (
  <>
    <nav className='flex justify-between px-5 m-auto py-3 box-border fixed  top-0 left-0 right-0 bg-white  font-bold'>
      <ul className='flex'>
        <li>
          <Cpu />
        </li>
        <li className='px-10'>ZipTech</li>
        <li className='pl-14'>
          <AlignJustify />
        </li>
      </ul>
      <ul className='flex justify-between w-15'>
        <li className='text-pink-800'>
          <Bell />
        </li>
        <li className='pl-10'>
          <Circle />
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
