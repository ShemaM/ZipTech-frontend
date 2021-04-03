/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LOGO from '../../images/LOGO.svg';
import { userSignin } from '../../actions/userActions';

toast.configure();
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, errors, reset } = useForm();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userData } = userLogin;

  const redirect = location.search ? location.search.split('=') : '/dashboard';

  useEffect(() => {
    if (userData) {
      history.push(redirect);
    } else if (error) {
      toast.error(error);
    }
  }, [history, userData, redirect, error]);

  const notify = () => {
    toast.error({ error });
  };

  const submitHandler = () => {
    dispatch(userSignin(email, password));
    reset();
  };

  return (
    <>
      <div className='bg-login-100 h-screen font-sans flex flex-col items-center py-20'>
        <div className=''>
          <img src={LOGO} className='w-16' alt='' />
        </div>
        <div className='mt-10'>
          <h1 className='text-3xl font-bold text-gray-300'>Sign In</h1>
        </div>
        <div className='mt-5 w-1/2 h-full m-auto'>
          <form onSubmit={handleSubmit(submitHandler)} className='py-5'>
            <div className='flex flex-col items-center'>
              <div className='mb-10'>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-login-200 border-2 hover:border-login-300 border-login-200 text-white w-80 py-4 px-8 rounded-lg outline-none'
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  ref={register({
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                <p className='col-span-2 text-red-500 text-center'>
                  {errors.email && errors.email.type === 'required' && (
                    <span role='alert'>No email provided</span>
                  )}
                </p>

                <p className='col-span-2 text-red-500 text-center'>
                  {errors.email && errors.email.type === 'pattern' && (
                    <span role='alert'>E-mail is not valid</span>
                  )}
                </p>
              </div>
              <div className='mb-5'>
                <input
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='bg-login-200 border-2 hover:border-login-300 border-login-200 text-white w-80 py-4 px-8 rounded-lg outline-none'
                  type='password'
                  placeholder='Password'
                  ref={register({ required: true, minLength: 8 })}
                />
                <p className='w-full col-span-2 text-red-500 text-center'>
                  {errors.password && errors.password.type === 'required' && (
                    <span role='alert'>No password provided</span>
                  )}
                </p>

                <p className='w-full col-span-2 text-red-500 text-center'>
                  {errors.password && errors.password.type === 'minLength' && (
                    <span role='alert'>
                      Password should be at-least 8 characters.
                    </span>
                  )}
                </p>
              </div>
              <div className='mb-10'>
                <Link
                  className='text-login-300 hover:underline hover:text-green-500 text-lg'
                  to='/forgot'
                >
                  Don&apos;t Remember Password ?
                </Link>
              </div>
              <div>
                <button
                  className='bg-login-300 border-none outline-none appearance-none hover:bg-white hover:text-login-300 py-3 px-8 w-80 text-white text-xl font-bold rounded-lg'
                  type='submit'
                  onClick={notify}
                >
                  login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
