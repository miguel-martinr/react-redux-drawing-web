import React, { Fragment } from "react"
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { colorChanged } from "./CanvasSlice";
// import { StateType } from "../../main";



export const ColorPicker = () => {

  // const color = useSelector((state: StateType) => state.color);
  const color = useAppSelector((state) => state.canvas.color);
  const dispatch = useAppDispatch();

  const handleColorChange = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch(colorChanged(ev.currentTarget.value));
  }

  return (
    <Fragment>
      <label className="form-label">Color</label>
      <input onChange={handleColorChange} type="color" className="form-control form-control-color w-100" value={color}
        title="Color" />
    </Fragment>
  )
}