import React from 'react';
import {
  Sliders,
  MessageSquare,
  UserPlus,
  Bell,
  User,
  Gift,
  Briefcase,
} from 'react-feather';

import SidebarItem from './SidebarItem';

const Sidebar = () => (
  <>
    <div className='bg-gray-900 h-screen'>
      <ul>
        <li>
          <SidebarItem icon={<Sliders />} linkName='Dashboard' to='/overview' />
          <SidebarItem
            icon={<MessageSquare />}
            linkName='Message'
            to='/message'
          />
          <SidebarItem
            icon={<UserPlus />}
            linkName='Subscribers'
            to='/subscribe'
          />
          <SidebarItem
            icon={<Bell />}
            linkName='Notification'
            to='/notification'
          />
          <SidebarItem icon={<User />} linkName='Profile' to='/user' />
          <SidebarItem icon={<Gift />} linkName='Products' to='/product' />
          <SidebarItem icon={<Briefcase />} linkName='Order' to='/order' />
        </li>
      </ul>
    </div>
  </>
);

export default Sidebar;
