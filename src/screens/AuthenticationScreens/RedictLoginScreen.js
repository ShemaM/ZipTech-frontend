import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../images/LOGO.svg';

const ForgotPasswordScreen = () => (
  <>
    <div className='bg-gray-100  h-screen flex  justify-center'>
      <form className='bg-white  shadow-xl flex flex-col h-2/5 md:w-1/4 items-center mt-10  py-5 focus:bg-red-600 justify-around border-gray-300'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-10 pb-2' src={LOGO} alt='' />
          <h1 className='text-lg md:text-xl'>Reset password</h1>
        </div>

        <div className='w-3/4 flex flex-col justify-between'>
          <h1 className='text-gray-700 text-sm'>
            Check your email for a link to reset your password. If it doesn’t
            appear within a few minutes, check your spam folder
          </h1>
        </div>

        <Link
          to='/login'
          className='text-gray-600 text-center bg-gray-100  md:py-2 py-1  w-3/4'
          type='submit'
        >
          Back to login
        </Link>
      </form>
    </div>
  </>
);

export default ForgotPasswordScreen;
