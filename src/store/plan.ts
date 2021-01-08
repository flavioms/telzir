import { createSlice, Dispatch } from '@reduxjs/toolkit';

interface PlanState {
  plans: number[];
}
const initialState = { plans: [] } as PlanState;

const slice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    getPlanSuccess: (state, action) => {
      state.plans = action.payload;
    },
  },
});

const { getPlanSuccess } = slice.actions;

export const getPlans = () => async (dispatch: Dispatch) => {
  try {
    const res = [30, 60, 120];
    dispatch(getPlanSuccess(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export default slice.reducer;
