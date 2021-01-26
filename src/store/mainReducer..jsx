/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goods: [],
  filters: [],
};

export const mainReducer = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    loadGoods: (state, action) => {
      state.goods = action.payload;
    },
    loadFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { loadGoods, loadFilters } = mainReducer.actions;

export default mainReducer.reducer;

export const fetchGoods = () => async (dispatch) => {
  const response = await axios.get('https://hackthaton.azurewebsites.net/api/goods/buckwheat');
  const loadedGoods = response.data;
  console.log(loadedGoods);
  dispatch(loadGoods(loadedGoods));
};

export const fetchFilters = () => async (dispatch) => {
  const response = await axios.get('filters');
  const loadedFilters = response.data;
  dispatch(loadFilters(loadedFilters));
};
