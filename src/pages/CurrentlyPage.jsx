import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BooksCard from "../components/home/BooksCard";
import useAuthContext from "../hooks/useAuthContext";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const CurrentlyPage = () => {
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
        .get('https://techlib-back.onrender.com/books',{
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
      
        <div className="">
            <Navbar />
            <div className='px-10 py-8 bg-gray-900 h-screen'>
                <h1 className='text-start text-2xl font-semibold font-body mb-4 text-gray-200'>
                    Your currently reading books
                </h1>
              <div className="flex align-center justify-center">
              {loading ? (
                    <Spinner />
                  ) : (
                    books.length > 0 ? (
                      <BooksCard books={books} />
                    ) : (
                      <h1 className='text-md font-bold font-body text-gray-500 ml-8 border rounded p-2 border-gray-400'>This category is empty</h1>
                    )
                  )}

                {error && <p>{error}</p>} 
              </div>
            </div>
            <Footer />
        </div>
    );
};

export default CurrentlyPage;
