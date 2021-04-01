/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cpu } from 'react-feather';
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
      <div className='bg-login-100 h-screen flex flex-col items-center border-2 border-red-200 py-20'>
        <div className='border-2 border-red-400'></div>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <form onSubmit={submitHandler} className=''>
            {error && <Message>{error}</Message>}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=''
              type='text'
              placeholder='Email address'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=''
              type='password'
              placeholder='password'
            />
            <button className='' type='submit'>
              Sign In
            </button>
            <Link className='' to='/forgot'>
              Forgort password ?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
