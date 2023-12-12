import ButtonBasic from '../blocks/ButtonBasic';

export const BUTTONBASIC = {
  html: '<button class="btn btn-basic">Button Basic</button>',
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-basic {
  background-color: #4ba3e3;
  color: #fff;
}
`,
  element: ButtonBasic,
};
