import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import { StateType } from "../../main";



export const ColorPicker = () => {

  const color = useSelector((state: StateType) => state.color);
  const dispatch = useDispatch();

  const colorChanged = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch({type: '@color/updated', payload: {color: ev.currentTarget.value}});
  }

  return (
    <div>
      <label className="form-label">Color</label>
      <div className="row">
        <div className="col">
          <input onChange={colorChanged} type="color" className="form-control form-control-color w-100" value={color}
            title="Color" />
        </div>
      </div>
    </div>
      
  )
}