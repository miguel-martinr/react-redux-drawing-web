import p5Types from 'p5';
import React from 'react';
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

export interface CanvasProps {
}

export type ExportFormats = 'image/png' | 'image/jpeg';

export type Color = string | number;
export interface ColorPickerProps {
  title: string,
  handleColorChange: (color: Color) => void,
}