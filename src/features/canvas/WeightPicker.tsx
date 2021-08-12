import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import { StateType } from "../../main";



export const WeightPicker = () => {

  const weight = useSelector((state: StateType) => state.weight);
  const dispatch = useDispatch();

  const weightChanged = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch({type: '@weight/updated', payload: {weight: parseInt(ev.currentTarget.value)}});
  }

  return (
    <div>
      <label className="form-label">Weight</label>
      <div className="row">
        <div className="col">
          <input onChange={weightChanged} type="number" className="form-control form-control-color w-100" value={weight}
            title="Weight" />
        </div>
      </div>
    </div>  
  )
}