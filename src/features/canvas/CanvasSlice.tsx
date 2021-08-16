// DUCKS pattern -> get all the logic from one component in a single file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Color, ExportFormats, Line } from '../utils/types';


// createSlice -> function to define REDUX logic
// PayloadAction -> ts type repreenting the contents of one given action object

// Shape of the state inside of the slice managed by the reducer 



interface CanvasState {
  weight: number,
  color: Color,
  exportFormat: ExportFormats,
  mouseIsOverCanvas: boolean,
  backgroundColor: Color,
  history: Line[],
}

const initialState: CanvasState = {
  weight: 5,
  color: '#000000',
  exportFormat: 'image/png',
  mouseIsOverCanvas: false,
  backgroundColor: '#DCDCDC',
  history: []
}

// Slice that contains the reducer logic
const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    // inline object function
    colorChanged(state, action: PayloadAction<Color>) {
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
    },

    backgroundColorChanged(state, action: PayloadAction<Color>) {
      state.backgroundColor = action.payload;
    },

    historyLineAdded(state, action: PayloadAction<Line>) {
      state.history.push(action.payload);
    },

    historyCleared(state) {
      state.history = [];
    },

    historyPopLine(state) {
      state.history.pop();
    }
  }

})


export const {
  colorChanged,
  weightChanged,
  mouseOutOfCanvas,
  mouseOverCanvas,
  exportFormatChanged,
  backgroundColorChanged,
  historyLineAdded,
  historyCleared,
  historyPopLine,
} = canvasSlice.actions;
export default canvasSlice.reducer;



