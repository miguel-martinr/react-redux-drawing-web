import React, { ReactElement } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { CanvasProps } from '../utils/types';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { mouseOutOfCanvas, mouseOverCanvas } from '../canvas/CanvasSlice';
import { store } from '../../app/store';



export const Canvas = (props: CanvasProps) => {

  
  const {color, weight, mouseIsOverCanvas} = useAppSelector((state) => state.canvas);
  const dispatch = useAppDispatch();
  
  const resize = (p5: p5Types) => {
    p5.resizeCanvas(Math.floor(p5.windowWidth * 0.6), Math.floor(p5.windowHeight * 0.6));
  }
  
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    
    const canvas = p5.createCanvas(1, 1);
    canvas.parent(canvasParentRef);
    canvas.mouseOver(() => dispatch(mouseOverCanvas()));
    canvas.mouseOut(() => dispatch(mouseOutOfCanvas()));
    resize(p5);
    p5.background(220);  
    (window as any).p5 = p5;
  }
   
  const draw = (p5: p5Types) => {
    
    p5.stroke(color);
    p5.strokeWeight(weight);
    
    if (mouseIsOverCanvas && p5.mouseIsPressed)
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);

  }


  return (
    <div className="w-100 text-start">
      <Sketch
        setup={setup}
        draw={draw}        
      />
    </div>
  )
}
