import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import {IoMdArrowRoundBack} from 'react-icons/io'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-indigo-500 text-white px-4 py-1 rounded w-fit hover:bg-indigo-600 mt-2 ml-2 mb-2'
      >
        <IoMdArrowRoundBack className='text-3xl' />
      </Link>
    </div>
  );
};

export default BackButton;