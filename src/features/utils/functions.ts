import { Color, Line } from '.';
import p5Types from 'p5';

// Changes background color and draws all history
export const bgNHistory = (p5: p5Types, bgColor: Color, history: Line[]) => {
  p5.background(bgColor);
              
  history.forEach((line) => {
    drawLine(p5, line);
  })
}

// Draws a line 
export const drawLine = (p5: p5Types, line: Line) => {
  const {mouseX, mouseY, pmouseX, pmouseY} = line.coords;
  p5.stroke(line.color);
  p5.strokeWeight(line.weight);
  p5.line(mouseX, mouseY, pmouseX, pmouseY);
}