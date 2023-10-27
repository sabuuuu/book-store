import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import  useAuthContext  from '../hooks/useAuthContext';

function EditBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('');
    const [picture, setPicture] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useAuthContext();
    const backendBaseUrl = 'http://localhost:5555'; 

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}` , {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        .then((response) => {
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear)
            setPages(response.data.pages)
            setTitle(response.data.title)
            setStatus(response.data.status)
            setPicture(response.data.picture);
            setLoading(false);
          }).catch((error) => {
            setLoading(false);
            alert('An error happened. Please Chack console');
            console.log(error);
          });
      }, []);

      const handleProfilePictureChange = (e) => {
        setPicture(e.target.files[0]);
      }

      const handleEditBook = () => {

        const data = new FormData();
        data.append('title', title);
        data.append('author', author);
        data.append('publishYear', publishYear);
        data.append('pages', pages);
        data.append('status', status);
        data.append('picture', picture);

        setLoading(true);
        axios
          .put(`http://localhost:5555/books/${id}`, data , {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          })
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Book Edited successfully', { variant: 'success' });
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
    <div className='min-h-screen md:h-screen lg:h-screen xl:h-screen text-gray-400 bg-gray-900 body-font '>
    <BackButton />
    {loading ? <Spinner /> : ''}
    <div className=' rounded-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 w-full col-span-1 p-4 mx-auto mt-5 lg:col-span-8 xl:p-12 md:w-2/4 lg:col-span-8 xl:p-12 md:w-1/2 md:-mt-4 justify-center'>
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
          className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out '
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

        {/* <div className='my-4 flex flex-col justify-center items-center'>
          <label className='block mb-1 text-sm font-body self-start text-gray-400'>Picture</label>
          <img src={`${backendBaseUrl}/images/${picture}`} class="rounded-full w-32 h-32 object-cover mx-auto border-2 border-gray-200" />
          <input
            type='file'
            accept='.jpg, .png, .jpeg'
            onChange={(e) => handleProfilePictureChange(e)} 
            className="block mt-4 w-4/5 text-sm text-gray-900 border font-body border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
        </div> */}
      <button className='w-full py-2 mt-3 text-white font-body font-semibold bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleEditBook}>
        Save
      </button>
    </div>
  </div>
  )
}

export default EditBook