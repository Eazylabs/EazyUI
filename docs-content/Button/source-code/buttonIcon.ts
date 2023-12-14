import ButtonIcon from '../blocks/ButtonIcon';

export const BUTTONICON = {
  html: `<button className='btn btn-icon'>
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='14' viewBox='0 0 448 512' fill='white'>
    <path d='M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z' />
  </svg>
  Upload
</button>`,
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-icon {
    padding: 12px;
    border-radius: 5px;
    background-color: #4ba3e3;
    color: #fff;
}

.btn-icon:hover {
  background-color: #348fd0;
}
`,
  element: ButtonIcon,
};
