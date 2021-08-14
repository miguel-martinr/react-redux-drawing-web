import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ColorPickerProps } from "../utils/types";





export const ColorPicker = (props: ColorPickerProps) => {
  return (
    <Fragment>
      <label className="form-label">{props.title}</label>
      <input onChange={((ev: React.FormEvent<HTMLInputElement>) => {
        props.handleColorChange(ev.currentTarget.value);
      })} type="color" className="form-control form-control-color w-100" value={props.color}
        title="Color" />
    </Fragment>
  )
}