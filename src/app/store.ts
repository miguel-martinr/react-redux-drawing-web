import { configureStore } from '@reduxjs/toolkit';
// No curly braces cause it's the default
import canvasReducer from '../features/canvas/CanvasSlice';


// Making our redux store

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;