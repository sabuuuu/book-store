import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { useSnackbar } from 'notistack';


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const { enqueueSnackbar } = useSnackbar();


  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://techlib-back.onrender.com/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)

      enqueueSnackbar('Signed up successfully', { variant: 'success' });
    }
  }

  return { signup, isLoading, error }
}