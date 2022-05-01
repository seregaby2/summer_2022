import axios from 'axios';
import { dataUser } from '../../interface/interface';
import { AppDispatch } from '../store';
import { userSlice } from './userSlice';

export const fetchUsers = (searchValue: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());

    const response = await axios.get<dataUser>(`https://api.github.com/users/${searchValue}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof Error) dispatch(userSlice.actions.usersFetchingError(e.message));
  }
};
