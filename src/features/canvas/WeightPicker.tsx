import React, { Fragment } from "react"
import { weightChanged } from "./CanvasSlice"
import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {useDispatch, useSelector} from 'react-redux';
// import { StateType } from "../../main";



export const WeightPicker = () => {


  const weight = useAppSelector((state) => state.canvas.weight);
  const dispatch = useAppDispatch();

  const handleWeightChange = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch(weightChanged(parseInt(ev.currentTarget.value)));
  }

  return (
    <Fragment>
      <label className="form-label">Weight</label>
      <input onChange={handleWeightChange} type="number" className="form-control form-control-color w-100" value={weight}
        title="Weight" />
    </Fragment>
  )
}