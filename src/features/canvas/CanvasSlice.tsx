// DUCKS pattern -> get all the logic from one component in a single file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExportFormats } from '../utils/types';

// createSlice -> function to define REDUX logic
// PayloadAction -> ts type repreenting the contents of one given action object

// Shape of the state inside of the slice managed by the reducer 


interface CanvasState {
  weight: number,
  color: string,
  exportFormat: ExportFormats,
  mouseIsOverCanvas: boolean
}

const initialState: CanvasState = {
  weight: 5,
  color: '#000000',
  exportFormat: 'image/png',
  mouseIsOverCanvas: false
}

// Slice that contains the reducer logic
const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    // inline object function
    colorChanged(state, action: PayloadAction<string>) {
      // Looks like mutating code but it's NOT, due to 
      // immer library -> it tracks mutable code and transforms it into immutable code
      // This is achieved thanks to redux toolskit
      state.color = action.payload || state.color;
    },

    weightChanged(state, action: PayloadAction<number>) {
      state.weight = action.payload;
    },

    mouseOverCanvas(state) {
      state.mouseIsOverCanvas = true;
    },

    mouseOutOfCanvas(state) {
      state.mouseIsOverCanvas = false;
    },

    exportFormatChanged(state, action: PayloadAction<ExportFormats>) {
      state.exportFormat = action.payload;
    }
  }

})


export const { colorChanged, weightChanged, mouseOutOfCanvas, mouseOverCanvas, exportFormatChanged } = canvasSlice.actions;
export default canvasSlice.reducer;



