import axios from 'axios';
import { dataRepos, dataUser } from '../../interface/interface';
import { AppDispatch } from '../store';
import { userSlice } from './userSlice';

export const fetchUser = (searchValue: string) => async (dispatch: AppDispatch) => {
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

export const fetchRepos =
  (searchValue: string, currentPage: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.reposFetching());

      const response = await axios.get<dataRepos[]>(
        `https://api.github.com/users/${searchValue}/repos?per_page=4&page=${currentPage}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      dispatch(userSlice.actions.reposFetchingSuccess(response.data));
    } catch (e) {
      if (e instanceof Error) dispatch(userSlice.actions.reposFetchingError(e.message));
    }
  };
