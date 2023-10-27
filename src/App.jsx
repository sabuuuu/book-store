import React from 'react'
import { Routes , Route , Navigate} from 'react-router-dom'
import  useAuthContext  from './hooks/useAuthContext'

import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import Profile from './pages/Profile'
import ProfileEdit from './pages/profileEdit'

import WantPage from './pages/WantPage'
import FinishedPage from './pages/FinishedPage'
import CurrentlyPage from './pages/CurrentlyPage'

import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  const {user} = useAuthContext();

  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
      <Route path='/books/create' element={user ? <CreateBook /> : <Navigate to='/login' />} />
      <Route path='/books/edit/:id' element={ user ? <EditBook /> : <Navigate to='/login' />} />
      <Route path='/books/delete/:id' element={user ? <DeleteBook /> : <Navigate to='/login' />} />
      <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />
      <Route path='/profile/edit' element={user ? <ProfileEdit /> : <Navigate to='/login' />} />
      <Route path='/currently' element={user ? <CurrentlyPage /> : <Navigate to='/login' />} />
      <Route path='/want' element={user ? <WantPage /> : <Navigate to='/login' />} />
      <Route path='/finished' element={user ? <FinishedPage /> : <Navigate to='/login' />} />


      <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
      <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
    </Routes>
  )
}

export default App