/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LOGO from '../../images/LOGO.svg';
import Message from '../../components/Message';
import { resetPassword } from '../../actions/userActions';

const ResetPasswordScreen = ({ location, history }) => {
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const token = useLocation().search.split('?')[1];

  const dispatch = useDispatch();

  const resetPass = useSelector((state) => state.resetPassword);
  const { userPassword, error } = resetPass;

  const redirect = location.search ? location.search.split('=') : '/login';

  useEffect(() => {
    if (userPassword) {
      history.push(redirect);
    }
  }, [history, userPassword]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(newPassword, rePassword, token));
  };

  return (
    <>
      <div className='bg-gray-100  h-screen flex  justify-center'>
        <form
          onSubmit={submitHandler}
          className=' bg-white  shadow-xl flex flex-col h-2/5 md:w-1/4 items-center mt-10  py-5 focus:bg-red-600 justify-around border-gray-300'
        >
          <div className='flex flex-col justify-center items-center'>
            <img className='w-10 pb-2' src={LOGO} alt='' />
            <h1 className='text-lg md:text-xl'>Reset password</h1>
          </div>
          {error && <Message>{error}</Message>}
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='w-3/4 md:py-1 border-gray-200 border-2 hover:border-gray-400 outline-none bg-gray-50'
            type='password'
            placeholder='password'
          />
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className='w-3/4 md:py-1 border-gray-200 border-2 hover:border-gray-400 outline-none bg-gray-50'
            type='password'
            placeholder='confirm password'
          />
          <button
            className='text-white bg-green-500 w-3/4 hover:bg-green-400 md:py-2 py-1 '
            type='submit'
          >
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordScreen;
