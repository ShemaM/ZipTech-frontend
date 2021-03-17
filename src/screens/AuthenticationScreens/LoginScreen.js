/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '../../images/cpu.svg';
import { userSignin } from '../../actions/userActions';
import Message from '../../components/Message';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userData } = userLogin;

  const redirect = location.search ? location.search.split('=') : '/dashboard';

  useEffect(() => {
    if (userData) {
      history.push(redirect);
    }
  }, [history, userData, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignin(email, password));
  };

  return (
    <>
      <div className=' bg-gray-100  h-screen flex justify-center items-center'>
        <form
          onSubmit={submitHandler}
          className=' bg-white  shadow-xl flex flex-col h-3/5 md:w-1/4 items-center  focus:bg-red-600  justify-between border-gray-300'
        >
          <div className='flex flex-col justify-center items-center md:my-5 my-2'>
            <img className='w-20 pb-2' src={LOGO} alt='' />
            <h1 className='text-lg md:text-3xl'>Welcome to ZipTech</h1>
          </div>
          {error && <Message>{error}</Message>}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-3/4 md:py-1 border-gray-200 border-2 hover:border-gray-400 outline-none bg-gray-50'
            type='text'
            placeholder='Email address'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-3/4 md:py-1 border-gray-200 border-2 hover:border-gray-400 outline-none bg-gray-50'
            type='password'
            placeholder='password'
          />
          <button
            className='text-white bg-green-500 w-3/4 hover:bg-green-400 md:py-2 py-1 '
            type='submit'
          >
            Sign In
          </button>
          <Link className='py-4 text-blue-600' to='/forgot'>
            Forgort password ?
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
