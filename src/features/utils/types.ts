import React from "react";

export interface ButtonProps {
  buttonText: string,
  classes?: string,
}

export interface TriggerModalButtonProps extends ButtonProps {
  targetId: string,
}

export interface CloseModalButtonProps extends ButtonProps {
  
}


export interface FormProps {
  formName: string,
}

export interface RadioFormCheckProps extends FormProps {
  checks: {value: string, label: string, id: string, checked?: boolean}[],
}

export interface ModalProps {
  modalId: string,
  modalTitle: string,
  modalBody: JSX.Element,
  modalFooter: JSX.Element
}

export interface ExportFormatPickerProps {
  handleDownload: () => void
}
