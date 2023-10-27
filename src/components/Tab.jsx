import React ,{useState}from 'react'
import Currently from './cards/Currently';
import Want from './cards/Want';
import Finished from './cards/Finished';
import { Link } from 'react-router-dom';
function Tab() {
  return (
    <div className=' overflow-x-auto flex flex-col mt-4 ml-4 mr-4'>

        <div className=' border-gray-200 mb-2 py-2 px-2'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold font-body text-gray-200 ml-8 '>Currently Reading</h1>
                <button className='text-m border border-gray-800 px-4 py-1 mb-1 rounded bg-indigo-600 font-bold font-body text-gray-100'>
                    <Link to='/currently'>See all</Link>
                </button>
            </div>
            <div className='flex  place-content-center	' >
                <Currently />
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div className=' mb-2 py-2 px-2'>
            <div className='flex justify-between '>
                <h1 className='text-xl font-bold font-body text-gray-200 ml-8 divide-y-2 divide-blue-300'>Want to Read</h1>
                <button className='text-m border border-gray-800 px-4 py-1 mb-1 rounded bg-indigo-600 font-bold font-body text-gray-100'>
                    <Link to='/want'>See all</Link>
                </button>
            </div>
            <div className= 'flex  place-content-center	'  >
                <Want />
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div className=' border-gray-200 py-2 px-2'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold font-body text-gray-200 ml-8'>Finished</h1>
                <button className='text-m border border-gray-800 px-4 py-1 mb-1 rounded bg-indigo-600 font-bold font-body text-gray-100'>
                    <Link to='/finished'>See all</Link>
                </button>
            </div>
            <div className='flex  place-content-center	'>
                <Finished />
            </div>
        </div>
    </div>
  )
}

export default Tab