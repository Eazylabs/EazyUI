import SpeedDialContext from '../blocks/SpeedDialContext';

export const SPEEDDIALCONTEXT = {
  html: `<div class='speeddial'>
  <button class='speeddial-btn'>
    <svg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='0 0 448 512' fill='white'>
      <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
    </svg>
  </button>
  <div class='speeddial-menu context'>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>
</div>`,
  css: `.speeddial {
    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse;
  }
  
.speeddial-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  background-color: #4ba3e3;
  border-radius: 100%;
  width: fit-content;
  padding: 10px;
}
.speeddial-menu {
  display: none;
}

.speeddial:hover .speeddial-menu {
  display: block;
}

.speeddial:hover .speeddial-btn svg {
  transform: rotate(45deg);
}

.context {
  background-color: white;
  border: 0.5px solid #c3c6d1;
  width: 160px;
  border-radius: 10px;
  overflow: hidden;
}

.context ul {
  list-style: none;
  padding: 0px 0px;
  margin: 0;
}

.context li {
  border-bottom: 0.5px solid #c3c6d1;
  padding: 4px 6px;
}`,
  element: SpeedDialContext,
};
