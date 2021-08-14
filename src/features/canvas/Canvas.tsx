import React, { ReactElement } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { CanvasProps } from '../utils/types';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { historyLineAdded, mouseOutOfCanvas, mouseOverCanvas } from '../canvas/CanvasSlice';
import { bgNHistory, LineCoords } from '../utils';




export const Canvas = (props: CanvasProps) => {

  
  const {color, weight, mouseIsOverCanvas, backgroundColor, history} = useAppSelector((state) => state.canvas);
  const dispatch = useAppDispatch();
  
  const resize = (p5: p5Types) => {
    p5.resizeCanvas(Math.floor(p5.windowWidth * 0.6), Math.floor(p5.windowHeight * 0.6));
    p5.background(backgroundColor);
    history.forEach((line) => {
      bgNHistory(p5, backgroundColor, history);
    })
  }
  
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    
    const canvas = p5.createCanvas(1, 1);
    canvas.parent(canvasParentRef);
    canvas.mouseOver(() => dispatch(mouseOverCanvas()));
    canvas.mouseOut(() => dispatch(mouseOutOfCanvas()));
    resize(p5);
    p5.background(backgroundColor);  
    (window as any).p5 = p5;
  }
   
  const draw = (p5: p5Types) => {
    
    p5.stroke(color);
    p5.strokeWeight(weight);
    
    if (mouseIsOverCanvas && p5.mouseIsPressed) {
      const {mouseX, mouseY, pmouseX, pmouseY} = p5;
      p5.line(mouseX, mouseY, pmouseX, pmouseY);
      
      const coords: LineCoords = {mouseX, mouseY, pmouseX, pmouseY};
      dispatch(historyLineAdded({color, weight, coords}));
    }

  }


  return (
    <div className="w-100 text-start">
      <Sketch
        setup={setup}
        draw={draw}        
        windowResized={resize}
      />
    </div>
  )
}
