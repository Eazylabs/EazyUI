import ButtonNeuOutline from '../blocks/ButtonNeuOutline';

export const BUTTONNEUOUTLINE = {
  html: '<button class="btn btn-neu-outline">Neu Outline</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
}

.btn-neu-outline {
  background-color: transparent;
  border: 2px solid black;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0);
}

.btn-neu-outline:hover {
  background-color: #4ba3e3;
  color: #fff;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0);
}
`,
  element: ButtonNeuOutline,
};
