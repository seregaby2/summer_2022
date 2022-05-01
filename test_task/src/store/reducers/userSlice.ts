import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateForApi } from '../../interface/interface';

const initialState: StateForApi = {
  searchValue: 'hello',
};

export const userSlice = createSlice({
  name: 'responseApi',
  initialState,
  reducers: {
    getSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const reducerRequestApi = userSlice.reducer;
