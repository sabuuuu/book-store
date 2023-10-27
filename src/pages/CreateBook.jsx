import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import  useAuthContext  from '../hooks/useAuthContext';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [pages, setPages] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuthContext();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      pages,
      status
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen md:h-screen lg:h-screen xl:h-screen  w-auto px-2 pb-4 text-gray-400 bg-gray-900 body-font '>
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div className='rounded-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 w-full col-span-1 p-4 mx-auto  lg:col-span-8 xl:p-12 md:w-1/2 md:-mt-4 justify-center '>
        <div className='my-4'>
          <label className='block mb-1 text-sm font-body text-gray-400'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='my-4'>
          <label className='block mb-1 text-sm font-body text-gray-400'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='my-4'>
          <label className='block mb-1 text-sm font-body text-gray-400'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='my-4'>
          <label className='block mb-1 text-sm font-body text-gray-400'>Pages</label>
          <input
            type='number'
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='my-4'>
          <label className='block mb-1 text-sm font-body text-gray-400'>Status</label>
          <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='w-full font-body bg-gray-600  bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="Currently Reading" className=' text-gray-100 bg-gray-600 font-body font-semibold py-4 px-4 rounded bg-gray-200'>Currently Reading</option>
              <option value="Want to Read" className=' text-gray-100 bg-gray-600 font-body font-semibold py-4 px-4 rounded bg-gray-200'>Want to Read</option>
              <option value="Finished" className=' text-gray-100 bg-gray-600 font-body font-semibold py-4 px-4 rounded bg-gray-200'>Finished</option>
            </select>
        </div>
        <button className='w-full py-2 mt-3 text-white font-body font-semibold bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks