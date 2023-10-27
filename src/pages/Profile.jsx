import React, { useState ,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import  useAuthContext  from '../hooks/useAuthContext';
function Profile() {
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false);

  const { user } = useAuthContext();
  const userEmail = user.email;

  const backendBaseUrl = 'http://localhost:5555'; 

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/${userEmail}`)
      .then((response) => {

        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div class="relative min-h-screen w-full "> 

      <div class="h-screen bg-gradient-to-r from-gray-600 to-gray-800">
      </div>

      {/* profile */}
      <div class="w-4/5 h-4/5 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/"
          class="absolute top-0 left-0 ml-4 mt-4 ">
          <BackButton />
        </Link>
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-bold font-body text-white mb-12">Profile</h1>
          <img src={`${backendBaseUrl}/images/${userData.picture}`} class="rounded-full w-32 h-32 object-cover mx-auto border-2 border-gray-200" />
          <h1 class="text-2xl font-bold text-white mt-2">{userData.name} {userData.surname}</h1>
          {/* <span class="text-sm font-body text-gray-400">Developer</span> */}

             <Link to="/profile/edit"
             class="bg-indigo-600 hover:bg-indigo-700 text-white font-body font-semibold py-2 px-10 rounded mt-4"
             >Edit</Link>

        </div>
      </div>

    </div>
  )
}

export default Profile