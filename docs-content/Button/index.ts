import { ButtonBasic } from './blocks/ButtonBasic';
import { IEditor } from '@site/src/utils/interfaces/style';

const BUTTON: Array<IEditor> = [
  {
    element: ButtonBasic,
    initStyle: {
      '.button-container': {
        backgroundColor: '#4ba3e3',
        cursor: 'pointer',
        borderRadius: '0px',
        fontWeight: 'lighter',
        color: '#fff',
        padding: '10px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.20)',
      },
    },
  },
];

export default BUTTON;
