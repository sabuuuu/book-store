import { AiOutlineClose } from 'react-icons/ai';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import  useAuthContext  from '../hooks/useAuthContext';

const DeleteModal = ({ book, onClose }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    const { user } = useAuthContext();
  
        const handleDeleteBook = () => {
          setLoading(true);
          axios
            .delete(`https://techlib-back.onrender.com/books/${book._id}` , {
              headers: {
                'Authorization': `Bearer ${user.token}`
              }
            })
            .then(() => {
              setLoading(false);
              enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
              window.location.reload();
            })
            .catch((error) => {
              setLoading(false);
              // alert('An error happened. Please Chack console');
              enqueueSnackbar('Error', { variant: 'error' });
              console.log(error);
            });
        };
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className=' rounded-xl p-4 flex flex-col relative bg-gray-800 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-500 cursor-pointer'
          onClick={onClose}
        />
        
        <div className='rounded-xl  w-full h-full col-span-1 p-4 mx-auto mt-1 justify-center'>
        <h3 className='text-xl font-body font-bold text-white mb-10 mt-10 text-center'>Are You Sure You want to delete this book?</h3>

        <button
          className='w-full mt-50 text-white font-body font-medium bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>

      </div>
    </div>
  );
};

export default DeleteModal;