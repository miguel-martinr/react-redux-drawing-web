import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ColorPickerProps } from "../utils/types";
import { colorChanged } from "./CanvasSlice";




export const ColorPicker = (props: ColorPickerProps) => {

  const color = useAppSelector((state) => state.canvas.color);
  


  return (
    <Fragment>
      <label className="form-label">{props.title}</label>
      <input onChange={((ev: React.FormEvent<HTMLInputElement>) => {
        props.handleColorChange(ev.currentTarget.value);
      })} type="color" className="form-control form-control-color w-100" value={color}
        title="Color" />
    </Fragment>
  )
}