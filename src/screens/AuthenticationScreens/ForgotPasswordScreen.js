/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LOGO from '../../images/LOGO.svg';
import { forgotPassword } from '../../actions/userActions';
import Message from '../../components/Message';

const ForgotPasswordScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const forgotPass = useSelector((state) => state.forgotPassword);
  const { userEmail, error } = forgotPass;

  const redirect = location.search
    ? location.search.split('=')
    : '/password_reset';

  useEffect(() => {
    if (userEmail) {
      history.push(redirect);
    }
  }, [userEmail, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <>
      <div className='bg-gray-100  h-screen flex  justify-center'>
        <form
          onSubmit={submitHandler}
          className='bg-white  shadow-xl flex flex-col h-2/5 md:w-1/4 items-center mt-10  py-5 focus:bg-red-600 justify-around border-gray-300'
        >
          <div className='flex flex-col justify-center items-center'>
            <img className='w-10 pb-2' src={LOGO} alt='' />
            <h1 className='text-lg md:text-xl'>Reset password</h1>
          </div>
          {error && <Message>{error}</Message>}
          <div className='w-3/4 flex flex-col justify-between'>
            <h1 className='text-gray-700 text-sm'>
              Enter your user account verified email address and we will send
              you a password reset link.
            </h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-gray-200 border-2 hover:border-gray-400 outline-none mt-5 bg-gray-50'
              type='text'
              placeholder='Email address'
            />
          </div>

          <button
            className='text-white bg-green-500 hover:bg-green-400 md:py-2 w-3/4'
            type='submit'
          >
            Send reset password email
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
