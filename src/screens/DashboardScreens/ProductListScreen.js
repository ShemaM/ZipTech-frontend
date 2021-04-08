import React from 'react';
import { Link } from 'react-router-dom';
import { Trash, Edit } from 'react-feather';
import NavBar from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const ProductListScreen = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <div className='bg-gray-50 mt-12 grid grid-cols-4'>
        <div className='bg-gray-900 h-screen w-64 fixed'>
          <Sidebar />
        </div>
        <div className='col-span-6 h-screen border-2 ml-64 px-20 py-5'>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>PRODUCTS</h1>
            <Link
              to='/product_create'
              className='text-xs border-gray-700 border-2 px-2 py-2 text-gray-200 bg-black'
            >
              +CREATE PRODUCT
            </Link>
          </div>
          <div className='mt-5'>
            <table className='table-auto w-full'>
              <thead>
                <tr className='border-gray-200 border-2'>
                  <th className='text-left py-2'>ID</th>
                  <th className='text-left py-2'>NAME</th>
                  <th className='text-left py-2'>DESCRIPTION</th>
                  <th className='text-left py-2'>BRAND</th>
                  <th className='text-left py-2'>CATEGORY</th>
                  <th className='text-left py-2'> </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-gray-200 border-2'>
                  <td className='py-2'>1</td>
                  <td className='py-2'>Iphone 12</td>
                  <td className='py-2'>8GB-RAM 64GB-MEMORY</td>
                  <td className='py-2'>Apple</td>
                  <td className='py-2'>Phones</td>
                  <td>
                    <ul className='flex justify-center'>
                      <li>
                        <Link to='/edit_product'>
                          <Edit className='border-white py-1 px-1 text-2xl  bg-white border-2' />
                        </Link>
                      </li>
                      <li>
                        <button type='button'>
                          <Trash className='border-red-500 py-1 px-1 bg-red-500 border-2' />
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className='border-gray-200 bg-red-50 border-2'>
                  <td className='py-2'>1</td>
                  <td className='py-2'>Iphone 12</td>
                  <td className='py-2'>8GB-RAM 64GB-MEMORY</td>
                  <td className='py-2'>Apple</td>
                  <td className='py-2'>Phones</td>
                  <td>
                    <ul className='flex justify-center'>
                      <li>
                        <Link to='/edit_product'>
                          <Edit className='border-white py-1 px-1 text-2xl  bg-white border-2' />
                        </Link>
                      </li>
                      <li>
                        <button type='button'>
                          <Trash className='border-red-500 py-1 px-1 bg-red-500 border-2' />
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default ProductListScreen;
