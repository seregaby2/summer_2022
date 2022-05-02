import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateForApi, dataUser, dataRepos } from '../../interface/interface';

const initialDataUser: dataUser = {
  login: '',
  name: null,
  id: 0,
  avatar_url: '',
  html_url: '',
  followers: 0,
  following: 0,
  public_repos: 0,
};

const initialState: StateForApi = {
  dataUser: initialDataUser,
  dataRepos: [],
  searchValue: '',
  isLoading: false,
  errorUser: '',
  errorRepos: '',
};

export const userSlice = createSlice({
  name: 'responseApi',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<dataUser>) {
      state.isLoading = false;
      state.errorUser = '';
      state.dataUser = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.errorUser = action.payload;
    },
    reposFetching(state) {
      state.isLoading = true;
    },
    reposFetchingSuccess(state, action: PayloadAction<dataRepos[]>) {
      state.isLoading = false;
      state.errorRepos = '';
      state.dataRepos = action.payload;
    },
    reposFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.errorRepos = action.payload;
    },
    getSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const reducerRequestApi = userSlice.reducer;
