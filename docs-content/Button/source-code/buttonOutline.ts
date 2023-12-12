import ButtonOutline from '../blocks/ButtonOutline';

export const BUTTONOUTLINE = {
  html: '<button class="btn btn-outline">Button Outline</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .btn-outline {
    background-color: transparent;
    border: 1px solid #4ba3e3;
    color: #4ba3e3;
  }
  `,
  element: ButtonOutline,
};
