import { IEditor } from '@site/src/utils/interfaces/style';
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
        borderColor: '',
        borderStyle: '',
        borderWidth: '',
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.20)',
      },
    },
    initContent: {
      '.button-container': 'Button',
    },
  },
];

export default BUTTON;
