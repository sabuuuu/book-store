import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import axios from 'axios';
import  useAuthContext  from '../../hooks/useAuthContext';

import BookModal from './BookModal';
import DeleteModal from '../../pages/DeleteModal';

import Book from '../../assets/min.jpg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const { user } = useAuthContext();

  return (
  <div class="w-32  bg-gray-800 flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 relative">
    <img class="rounded-xl h-40 w-32 self-center "     src={book.picture} alt="" />
    <div class="px-4 py-2">
        <h1 class=" text-m font-bold font-body text-gray-100">{book.title}</h1>
        <p class=" text-xs italic font-body text-gray-500">{book.author}</p>
      </div>
    <div class="">
      <div class="flex justify-end  pt-2">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="absolute top-48 bottom-2 right-0 px-2  ">
                  <div>
                    <Menu.Button className=" relative flex  text-sm focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <button id="dropdownButton" data-dropdown-toggle="dropdown" class=" inline-block h-6 w-6  dark:text-white  focus:outline-none   rounded-lg text-xs" type="button">
                            <span class="sr-only">Open dropdown</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                            </svg>
                        </button>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-5 bottom-10 z-10 mt-2 w-46 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                          <a onClick={() => setShowModal(true)} 
                          className={classNames(active ? 'bg-gray-100' : '', 'font-body block px-4 py-2 text-sm text-gray-700 flex cursor-pointer')}
                          >
                            <BiShow className='text-xl text-gray-700'/> View
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'font-body block px-4 py-2 text-sm text-gray-700')}
                          >
                            <Link to={`/books/edit/${book._id}`} className='flex'>
                              <MdOutlineModeEditOutline className='text-xl text-gray-700 ' /> Edit
                            </Link>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a onClick={() => setShowModalDelete(true)} 
                          className={classNames(active ? 'bg-gray-100' : '', 'font-body block px-4 py-2 text-sm text-gray-700 flex cursor-pointer')}
                          >
                            <MdOutlineDelete className='text-xl text-gray-700'/> Delete
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
      </div>
    </div>
        {showModal && (
              <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
            {showModalDelete && (
              <DeleteModal book={book} onClose={() => setShowModalDelete(false)} />
        )}
  </div>

  );
};

export default BookSingleCard;