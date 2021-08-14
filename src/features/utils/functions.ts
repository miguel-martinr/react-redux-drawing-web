import { Color, Line } from '.';
import p5Types from 'p5';

export const bgNHistory = (p5: p5Types, bgColor: Color, history: Line[]) => {
  p5.background(bgColor);
              
  history.forEach((line) => {
    const {mouseX, mouseY, pmouseX, pmouseY} = line.coords;
    p5.stroke(line.color);
    p5.strokeWeight(line.weight);
    p5.line(mouseX, mouseY, pmouseX, pmouseY);
  })
}