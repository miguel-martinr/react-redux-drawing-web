import React, { useState } from 'react'
import { ColorPicker } from './features/canvas/ColorPicker'
import { WeightPicker } from './features/canvas/WeightPicker'
import { ExportFormatPicker } from './features/canvas/ExportFormatPicker'
import { Canvas } from './features/canvas/Canvas'
import p5Types from 'p5';
import { useAppSelector } from './app/hooks';

function App() {
  const exportExtension = useAppSelector((state) => state.canvas.exportFormat.replace('image/', ''));

  const canvas = <Canvas />;
  return (
    <div className="App container ">
      <div className="row align-items-end controls">
        <div className="col">
          <ColorPicker></ColorPicker>
        </div>
        <div className="col">
          <WeightPicker></WeightPicker>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={
              () => {
                const p5 = (window as any).p5;
                p5.clear();
                p5.background(220);
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
      </div>
      <div className="row mt-4 canvas">
        <div className="col">
          {canvas}
        </div>
      </div>
    </div>
  )
}

export default App
