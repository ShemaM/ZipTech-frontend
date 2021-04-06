/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LOGO from '../../images/LOGO.svg';
import { forgotPassword } from '../../actions/userActions';
import Spinner from '../../components/Spinner';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const forgotPass = useSelector((state) => state.forgotPassword);
  const { loading, userEmail, error } = forgotPass;

  useEffect(() => {
    if (userEmail) {
      toast.success('Check your email for password reset link');
    } else if (error) {
      toast.error(error);
    }
  }, [userEmail, error]);

  const submitHandler = () => {
    dispatch(forgotPassword(email));
  };

  return (
    <>
      <div className='bg-login-100 h-screen font-sans flex flex-col items-center py-20'>
        <div className=''>
          <img src={LOGO} className='w-16' alt='' />
        </div>
        <div className='mt-10'>
          <h1 className='text-2xl font-bold text-gray-300'>Reset Password</h1>
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
                {loading ? (
                  <Spinner />
                ) : (
                  <button
                    className='bg-login-300 border-none outline-none appearance-none hover:bg-white hover:text-login-300 py-3 px-8 w-80 text-white text-xl font-bold rounded-lg'
                    type='submit'
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className=''>
                <Link
                  className='text-login-300 hover:underline hover:text-green-500 text-xs'
                  to='/login'
                >
                  Return to login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
