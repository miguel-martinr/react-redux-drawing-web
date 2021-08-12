import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ColorPicker } from './features/canvas/ColorPicker'
import { WeightPicker } from './features/canvas/WeightPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorPicker></ColorPicker>
      <WeightPicker></WeightPicker>
    </div>
  )
}

export default App
