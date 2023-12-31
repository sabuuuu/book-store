import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-gray-900 bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center border border-gray-200 shadow'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl p-4 flex flex-col relative '
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-2 mb-4 bg-indigo-500 rounded-lg font-body font-semibold text-gray-100'>
          {book.publishYear}
        </h2>
        <div className='flex justify-start items-center gap-x-2 font-body'>
          <PiBookOpenTextLight className='text-indigo-500 text-2xl font-body' />
          <h2 className='my-1 text-gray-100'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2 font-body'>
          <BiUserCircle className='text-indigo-500 text-2xl font-body' />
          <h2 className='my-1 text-gray-100'>{book.author}</h2>
        </div>
        <p className='mt-4 font-body text-gray-100'>Description :</p>
        <p className='my-2 font-body text-gray-100'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;