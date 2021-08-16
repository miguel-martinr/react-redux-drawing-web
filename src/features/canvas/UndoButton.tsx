import React, { Fragment } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Line } from '../utils';
import p5Types from 'p5';
import { drawLine } from '../utils/functions';

export const UndoButton = () => {

  const {history, backgroundColor} = useAppSelector((state) => state.canvas);

  const conito = () => {
    if (history.length === 0) return;

    const lastLine = history[history.length-1] as Line;
    lastLine.color = backgroundColor;

    const p5: p5Types = (window as any).p5;
    drawLine(p5, lastLine);
  }


  return (
    <Fragment>
      <div className="w-100">
        <button className="btn btn-primary" onClick={conito}>
          <i className="bi bi-arrow-return-left me-2"></i>
          <span>Undo</span>
        </button>
      </div>
    </Fragment>
  )
}
