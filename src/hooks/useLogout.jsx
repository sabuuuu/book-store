import useAuthContext from './useAuthContext';
import { useSnackbar } from 'notistack';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const { enqueueSnackbar } = useSnackbar();

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user');

        //dispatch logout
        dispatch({type: 'LOGOUT'});
        
        //show snackbar
        enqueueSnackbar('Logged out successfully', { variant: 'success' });
    }

    return {logout};
}