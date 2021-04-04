/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LOGO from '../../images/LOGO.svg';
import { resetPassword } from '../../actions/userActions';
import Spinner from '../../components/Spinner';

const ResetPasswordScreen = ({ history }) => {
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const token = useLocation().search.split('?')[1];

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const resetPass = useSelector((state) => state.resetPassword);
  const { loading, userPassword, error } = resetPass;

  useEffect(() => {
    if (userPassword) {
      toast.success('successfully changed password');
      history.push('/login');
    } else if (error) {
      toast.error(error);
    }
  }, [history, userPassword, error]);

  const submitHandler = () => {
    dispatch(resetPassword(newPassword, rePassword, token));
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
              <div className='mb-5'>
                <input
                  name='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
              <div className='mb-5'>
                <input
                  name='password'
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
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
              <div>
                {loading ? (
                  <Spinner />
                ) : (
                  <button
                    className='bg-login-300 border-none outline-none appearance-none hover:bg-white hover:text-login-300 py-3 px-8 w-80 text-white text-xl font-bold rounded-lg'
                    type='submit'
                  >
                    Change Password
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordScreen;
