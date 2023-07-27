import { statusFilter } from '../../constants/filter';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: statusFilter.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
