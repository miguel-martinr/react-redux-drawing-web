import React from 'react';
import { CloseModalButtonProps } from './types';

export const CloseModalButton = (props: CloseModalButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-dismiss="modal"
      aria-label="Close">

      {props.buttonText}
    </button>
  )
}
