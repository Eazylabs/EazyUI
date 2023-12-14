import ButtonNeuBasic from '../blocks/ButtonNeuBasic';

export const BUTTONNEUBASIC = {
  html: '<button class="btn btn-neu-basic">Neu Basic</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
}

.btn-neu-basic {
    background-color: #4ba3e3;
    border: 2px solid black;
    color: #fff;
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0);
}
  
.btn-neu-basic:hover {
    background-color: #348fd0;
}
`,
  element: ButtonNeuBasic,
};
