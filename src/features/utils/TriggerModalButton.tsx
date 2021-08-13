import React from 'react';
import { TriggerModalButtonProps } from './types';

// A button that triggers a bootstrap modal
export const TriggerModalButton = (props: TriggerModalButtonProps) => {

  return (

    <button
      className={`btn btn-success w-100 ${props.classes || ""}`}
      type="button"
      data-bs-toggle="modal"
      data-bs-target={`#${props.targetId}`}>

      {props.buttonText}
    </button>

  )
}