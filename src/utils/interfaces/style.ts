import { CSSProperties } from 'react';

export interface IStyle {
  [key: string]: CSSProperties;
}

export interface IEditor {
  element: any;
  initStyle: IStyle;
}

export interface IEditorInput {
  section: string;
  icons: any;
  input: Array<{
    type: string;
    property: string;
    icons: any;
    options?: Array<string>;
  }>;
}
