import React, { Fragment } from 'react';
import { CloseModalButton } from '../utils/CloseModalButton';
import { Modal } from '../utils/Modal';
import { RadioFormCheck } from '../utils/RadioFormCheck';
import { TriggerModalButton } from '../utils/TriggerModalButton';
import { ExportFormatPickerProps } from '../utils/types';

export const ExportFormatPicker = (props: ExportFormatPickerProps) => {

  const modalId = "downloadTypes";
  const modalBody = (
    <RadioFormCheck
      formName={modalId}
      checks={
        [
          { id: "exportJpg", value: "image/jpeg", label: "JPG" },
          { id: "exportPng", value: "image/png", label: "PNG", checked: true }
        ]
      }
    />
  );

  const modalFooter = (
    <div>
      <CloseModalButton
        buttonText="Cancel"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleDownload}>
        
        Downlaod
      </button>
    </div>
  )

  return (
    <Fragment>
      <TriggerModalButton
        buttonText="Download"
        targetId={modalId}
        key={modalId}

      />
      <Modal
        modalBody={modalBody}
        modalFooter={modalFooter}
        modalId={modalId}
        modalTitle="Choose a format"
      />
    </Fragment>

  )
}