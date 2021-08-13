import React from 'react'
import { RadioFormCheckProps } from './types'



export const RadioFormCheck = (props: RadioFormCheckProps) => {
  return (
    <div>
      {
        props.checks.map((check) => (
          <div className="form-check" key={check.id}>
            <input
              className="form-check-input"
              type="radio"
              name={props.formName}
              id={check.id}
              value={check.value}
              defaultChecked={check.checked || false}

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
