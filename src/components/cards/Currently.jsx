import React, { useEffect, useState } from 'react';
import  useAuthContext  from '../../hooks/useAuthContext';
import BooksCard from '../../components/home/BooksCard';
import axios from 'axios';
import Spinner from '../../components/Spinner';
function Currently() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true);
      if(!user){
        setError('You must be logged in to view this page');
        setLoading(false);
        return
      }

      axios
      .get('http://localhost:5555/books',{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      .then((response) => {
        // Filter the books with status 'Currently Reading'
        const currentlyReadingBooks = response.data.data.filter((book) => book.status === 'Currently Reading');
        setBooks(currentlyReadingBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div>
    {loading ? (
      <Spinner />
    ) : (
      books.length > 0 ? (
        <BooksCard books={books.slice(0, 5)} />
      ) : (
        <div class="">
          <h1 className='text-xl font-bold font-body text-gray-400 ml-8'>You have no currently reading books</h1>
         </div> 
      )
    )}

    {error && <p>{error}</p>} 
  </div>
  )
}

export default Currently