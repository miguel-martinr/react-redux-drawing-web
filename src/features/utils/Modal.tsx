import React from 'react';
import { CloseModalButton } from './CloseModalButton';
import { ModalProps } from './types';



export const Modal = (props: ModalProps) => {
  return (
    <div className="modal" id={props.modalId} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.modalTitle}</h5>
          </div>
          <div className="modal-body">
            {props.modalBody}
          </div>
          <div className="modal-footer">
            {props.modalFooter}
          </div>
        </div>
      </div>
    </div>

  )
}