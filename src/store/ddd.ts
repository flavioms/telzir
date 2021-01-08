import { createSlice, Dispatch } from '@reduxjs/toolkit';

interface DDDState {
  ddd: string[];
}
const initialState = { ddd: [] } as DDDState;

const slice = createSlice({
  name: 'ddd',
  initialState,
  reducers: {
    getDDDSuccess: (state, action) => {
      state.ddd = action.payload;
    },
  },
});

const { getDDDSuccess } = slice.actions;

export const getDDD = () => async (dispatch: Dispatch) => {
  try {
    const res = ['011', '016', '017', '018'];
    dispatch(getDDDSuccess(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export default slice.reducer;
