import React from 'react';
import { ExportFormats, RadioFormCheckProps } from './types';
import { useAppDispatch } from '../../app/hooks';
import { exportFormatChanged } from '../canvas/CanvasSlice';


export const RadioFormCheck = (props: RadioFormCheckProps) => {
  const dispatch = useAppDispatch();
  
  return (
    <div onClick={() => {
      
      const value: ExportFormats = (document.querySelector(`input[name=${props.formName}]:checked`) as any).value;
      dispatch(exportFormatChanged( value || 'image/png'));
    }}>
      {
        props.checks.map((check) => (
          <div className="form-check" key={check.id}>
            <input
              className="form-check-input"
              type="radio"
              name={props.formName}
              id={check.id}
              value={check.value}
            />
            <label
              className="form-check-label"
              htmlFor={check.id}>

              {check.label}
            </label>
          </div>
        ))
      }
    </div>
  )
}
