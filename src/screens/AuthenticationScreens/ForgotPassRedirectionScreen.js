import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../images/LOGO.svg';

const ForgotPassRedirectionScreen = () => (
  <>
    <div className='bg-login-100 h-screen font-sans flex flex-col items-center py-20'>
      <form className='bg-white rounded-xl  shadow-lg flex flex-col h-2/5 md:w-1/4 items-center mt-10  py-5 focus:bg-red-600 justify-around border-gray-300'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-10 pb-2' src={LOGO} alt='' />
          <h1 className='text-lg md:text-xl'>Reset password</h1>
        </div>

        <div className='w-3/4 flex flex-col justify-between'>
          <h1 className='text-gray-700 text-sm'>
            Check your email for a link to reset your password. If it doesn’t
            appear within a few minutes, check your spam folder.
          </h1>
        </div>

        <Link
          to='/'
          className='bg-login-300 border-none outline-none appearance-none hover:bg-gray-200 hover:text-gray-900 py-3 px-8 w-80 text-white text-lg font-bold rounded-lg text-center'
          type='submit'
        >
          Back to login
        </Link>
      </form>
    </div>
  </>
);

export default ForgotPassRedirectionScreen;
