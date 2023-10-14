import { IEditor } from '@site/src/utils/interfaces/style';
import { ButtonOutline } from './blocks/ButtonOutline';
import { ButtonBasic } from './blocks/ButtonBasic';

const BUTTON: Array<IEditor> = [
  {
    element: ButtonBasic,
    initStyle: {
      '.button-container': {
        backgroundColor: '#4ba3e3',
        cursor: 'pointer',
        borderRadius: '8px',
        fontWeight: 'semibold',
        color: '#fff',
        padding: '10px',
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.20)',
      },
    },
    initHover: {
      '.button-container': {
        backgroundColor: 'red',
      },
    },
    initContent: {
      '.button-container': 'Button ini Container',
    },
  },
  {
    element: ButtonOutline,
    initStyle: {
      '.button-outline': {
        backgroundColor: '#4ba3e3',
        cursor: 'pointer',
        borderRadius: '0px',
        fontWeight: 'lighter',
        color: '#fff',
        padding: '10px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
    },
    initHover: {
      '.button-outline': {
        backgroundColor: 'red',
      },
    },
    initContent: {
      '.button-outline': 'Button ini Outline',
    },
  },
];

export default BUTTON;
