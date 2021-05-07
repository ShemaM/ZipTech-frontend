/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NavBar from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const ProductCreateScreen = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <div className='bg-gray-50 mt-12 grid grid-cols-4'>
        <div className='bg-gray-900 h-screen w-64 fixed'>
          <Sidebar />
        </div>
        <div className='col-span-6 h-screen border-2 ml-64 px-20 flex flex-col  items-center py-5'>
          <form className='flex bg-gray-300 justify-center w-1/2 py-10 items-center'>
            <div className='bg-gray-200 rounded-lg w-2/3'>
              <div className='flex flex-col  mx-10 pt-5'>
                <label>Name</label>
                <input
                  type='text'
                  className='bg-gray-100 w-auto outline-none py-2 px-2 box-border rounded-lg mt-2'
                  placeholder='name'
                />
              </div>
              <div className='flex flex-col px-10 pt-5'>
                <label>Brand</label>
                <input
                  type='text'
                  className='bg-gray-100 outline-none w-auto py-2 px-2 box-border rounded-lg mt-2'
                  placeholder='Brand'
                />
              </div>
              <div className='flex flex-col px-10 pt-5'>
                <label>Description</label>
                <input
                  type='text'
                  className='bg-gray-100 outline-none w-auto py-2 px-2 box-border rounded-lg mt-2'
                  placeholder='description'
                />
              </div>
              <div className='flex flex-col px-10 pt-5'>
                <label>Category</label>
                <select className='bg-gray-100 outline-none w-auto py-2 px-2 rounded-lg mt-2'>
                  <option>Phones</option>
                  <option>Computers</option>
                </select>
              </div>
              <div className='flex flex-col py-2 px-10 pt-5'>
                <label>Image</label>
                <input
                  type='file'
                  className='bg-gray-100 w-auto outline-none py-2 px-2 box-border rounded-lg mt-2'
                />
              </div>

              <div className='flex flex-col  mx-10 pt-5'>
                <button
                  className='my-10 hover:bg-login-300 hover:border-green-200 text-white w-full outline-none px-10 py-2 bg-black border-gray-700 border-2'
                  type='submit'
                >
                  +Create Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </>
);

export default ProductCreateScreen;
