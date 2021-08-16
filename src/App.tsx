import React from 'react'
import { ColorPicker } from './features/canvas/ColorPicker'
import { WeightPicker } from './features/canvas/WeightPicker'
import { ExportFormatPicker } from './features/canvas/ExportFormatPicker'
import { Canvas } from './features/canvas/Canvas'
import p5Types from 'p5';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { backgroundColorChanged, colorChanged, historyCleared } from './features/canvas/CanvasSlice'
import { bgNHistory } from './features/utils'
import { UndoButton } from './features/canvas/UndoButton'

function App() {
  const { backgroundColor, exportFormat, color, history } = useAppSelector((state) => state.canvas);
  const exportExtension = exportFormat.replace('image/', '');



  const dispatch = useAppDispatch();
  const canvas = <Canvas />;

  return (
    <div className="App container ">
      <div className="row align-items-end controls">
        <div className="col">
          <ColorPicker
            title="Color"
            handleColorChange={(color) => dispatch(colorChanged(color))}
            color={color}
          />
        </div>
        <div className="col">
          <ColorPicker
            title="Background Color"
            handleColorChange={(color) => {
              dispatch(backgroundColorChanged(color));
              const p5: p5Types = (window as any).p5;
              bgNHistory(p5, backgroundColor, history);
            }}
            color={backgroundColor}
          />
        </div>
        <div className="col">
          <WeightPicker />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={
              () => {
                const p5 = (window as any).p5;
                p5.clear();
                dispatch(historyCleared());
                p5.background(backgroundColor);
              }
            }>

            Clear
          </button>
        </div>
        <div className="col">
          <ExportFormatPicker
            handleDownload={
              () => {
                const p5: p5Types = (window as any).p5;
                p5.saveCanvas('alejo-drawing', exportExtension.replace('jpeg', 'jpg'));
              }
            }
          />
        </div>
        <div className="col">
          <UndoButton></UndoButton>
        </div>
      </div>
      <div className="row mt-4 canvas">
        <div className="col">
          {canvas}
        </div>
      </div>
    </div>
  )
}

export default App;
