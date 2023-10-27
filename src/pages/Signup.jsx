import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from "react-router-dom";
import books from '../assets/books.png';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <section className=" h-screen  w-auto px-4 pb-24 mx-auto  bg-gray-900 body-font">
      <header className="flex items-center justify-center py-5 mb-5 border-b border-gray-200">
      <a href="/" title="Home Page" class="flex items-center justify-start text-white text-2xl font-bold font-body">
        <img src={books} class="w-10 h-10 mr-3s" />
        BiblioTech
      </a>
      </header>

      <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
        <h1 className="mb-1 text-gray-300 text-xl font-medium text-center  md:text-3xl ">Create your Free Account</h1>
        <Link to='/login' >
          <p className="my-2 text-sm font-normal font-body  text-center text-gray-400 md:text-base">
            Already have an account?
            <a  class=" text-xs font-body text-indigo-300 hover:text-indigo-600"> Sign in</a>
          </p>
        </Link>

    <form className="mt-12 space-y-4 w" onSubmit={handleSubmit}>      
        <div className='block'>
            <label className='block mb-1 text-sm font-medium font-body text-gray-400'>Email : </label>
            <input className='w-full bg-gray-600 font-body bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className='block'>
            <label className='block font-body mb-1 text-sm font-medium text-gray-400'>Password : </label>
            <input  className='w-full font-body bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div class="flex items-center">
          <button className='w-full font-body font-semibold py-2 mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' disabled={isLoading}>Sign up</button>
        </div>
        {error && <div className="text-sm mt-3 text-red-700  text-center font-body">{error}</div>}
    </form>
    <p class="my-5 text-xs font-body font-medium text-center text-gray-400">
      By clicking "Sign Up" you agree to our
      <a href="#" class="text-xs font-body text-indigo-300 hover:text-indigo-600"> Terms of Service </a>
      and
      <a href="#" class="text-xs font-body text-indigo-300 hover:text-indigo-600"> Privacy Policy</a>.
    </p>
      </div>
    </section>
  )
}

export default Signup