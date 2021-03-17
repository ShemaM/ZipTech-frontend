/* eslint-disable react/prop-types */
import React from 'react';

const Message = ({ children }) => (
  <>
    <div className=' text-red-900 text-center text-xs bg-red-200 w-3/4 py-4'>
      {children}
    </div>
  </>
);

export default Message;
