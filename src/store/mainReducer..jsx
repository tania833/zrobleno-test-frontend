/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  goods: [],
};

export const mainReducer = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    loadGoods: (state, action) => {
      state.goods = action.payload;
    },
  },
});

export const { loadGoods } = mainReducer.actions;

export default mainReducer.reducer;

export const fetchGoods = (weight) => async (dispatch) => {
  const response = await axios.get(
    `https://hackthaton.azurewebsites.net/api/goods/buckwheat?weightFrom=${weight?.min}&weightTo=${weight?.max}`
  );
  const loadedGoods = response.data;
  dispatch(loadGoods(loadedGoods));
};

