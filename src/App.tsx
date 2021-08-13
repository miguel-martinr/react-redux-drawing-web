import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ColorPicker } from './features/canvas/ColorPicker'
import { WeightPicker } from './features/canvas/WeightPicker'
import { ExportFormatPicker } from './features/canvas/ExportFormatPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <div className="row align-items-end">
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
              () => console.log('Canvas cleared')
            }>

            Clear
          </button>
        </div>
        <div className="col">
          <ExportFormatPicker
            handleDownload={
              () => console.log('canvas downloaded')
            }
          />
        </div>
      </div>

    </div>
  )
}

export default App
