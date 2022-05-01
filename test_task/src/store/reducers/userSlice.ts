import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateForApi, dataUser } from '../../interface/interface';

const initialData: dataUser = {
  login: '',
  id: 0,
  avatar_url: '',
  url: '',
  html_url: '',
};
const initialState: StateForApi = {
  data: initialData,
  searchValue: '',
  isLoading: false,
  error: '',
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
      state.error = '';
      state.data = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload;
    },
    getSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const reducerRequestApi = userSlice.reducer;
