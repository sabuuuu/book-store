import React ,{ useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom';
import books from '../assets/books.png';
import frontPic from '../assets/image1.jpg';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

  return (
    <section className='grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen text-gray-400 bg-gray-900 body-font'>
      <div className='w-full col-span-1 p-4 mx-auto mt-20 lg:col-span-8 xl:p-12 md:w-2/4 justify-center'>

      <a href="/" title="Home Page" class="flex items-center justify-start text-white text-2xl font-bold font-body">
        <img src={books} class="w-10 h-10 mr-3s" />
        BiblioTech
      </a>
      <h1 class="mt-6 mb-4 text-xl text-left text-grey-400 font-body title-font mb-5">Log in to your account</h1>

        <form className='pb-1 space-y-4 justify-center items-center mt-6' onSubmit={handleSubmit}>
          <div className='block'>
            <label className='block mb-1 text-sm font-body text-gray-400'>Email : </label>
            <input className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type='email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='block'>
            <label className='block mb-1 text-sm font-body text-gray-400'>Password : </label>
            <input  className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div class="flex items-center">
            <button className='w-full py-2 mt-3 text-white font-body font-semibold bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' type='submit' disabled={isLoading}>Login</button>
          </div>
          

          {error && <div className='text-sm mt-3 text-red-700  text-center font-body'>{error}</div>}
        </form>
        <div class="my-6 space-y-2">
          <Link to='/signup' >
            <p class="text-xs font-body text-gray-400">Dont have an account?
              <a  class="text-indigo-300 font-body hover:text-indigo-600"> Create an account</a>
            </p>
          </Link>
          <a  class="block font-body text-xs text-indigo-300 hover:text-indigo-600">Forgot password?</a>
        </div>
      </div>
      <div class="col-span-1 lg:col-span-4">
        <img
          src={frontPic}
          class="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Login