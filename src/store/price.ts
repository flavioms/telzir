import { createSlice, Dispatch } from '@reduxjs/toolkit';

export interface Price {
  id: number;
  origin: string;
  destiny: string;
  price: number;
}

interface PriceState {
  prices: Price[];
}
const initialState = { prices: [] } as PriceState;

const slice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    getPricesSuccess: (state, action) => {
      state.prices = action.payload;
    },
  },
});

const { getPricesSuccess } = slice.actions;

export const getPrices = () => async (dispatch: Dispatch) => {
  try {
    const res = [
      { id: 1, origin: '011', destiny: '016', price: 1.9 },
      { id: 2, origin: '016', destiny: '011', price: 2.9 },
      { id: 3, origin: '011', destiny: '017', price: 1.7 },
      { id: 4, origin: '017', destiny: '011', price: 2.7 },
      { id: 5, origin: '011', destiny: '018', price: 0.9 },
      { id: 6, origin: '018', destiny: '011', price: 1.9 },
    ];

    dispatch(getPricesSuccess(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export default slice.reducer;
