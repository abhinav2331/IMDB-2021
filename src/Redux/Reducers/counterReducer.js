import * as types from '../Actions/actionTypes';
//import initialState from './initialState';

const initState = {
  counter: 5,
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {

    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state
  }
}

export default counterReducer;





// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);   
//     return response.data;
//   }
// );

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,

//   reducers: {
//     increment: (state) => {      
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },    
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },  
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// export default counterSlice.reducer;
