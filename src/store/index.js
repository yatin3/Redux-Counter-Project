import { createSlice,configureStore } from '@reduxjs/toolkit';

const intitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState:intitialState,
  reducers: {
    increment(state){
        state.counter++;
    },
    decrement(state){
        state.counter--;
    },
    increse(state,action){
        state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
        state.showCounter = !state.showCounter;
    }
  } 
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;