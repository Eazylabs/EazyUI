import SpeedDialNeuContextIcon from '../blocks/SpeedDialNeuContextIcon';

export const SPEEDDIALNEUCONTEXTICON = {
  html: `<div className='speeddial'>
  <button className='speeddial-btn neu'>
    <svg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='0 0 448 512' fill='white'>
      <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
    </svg>
  </button>
  <div className='speeddial-menu context neu'>
    <ul>
      <li>
        <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512' fill='#666666'>
          <path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z' />
        </svg>{' '}
        settings
      </li>
      <li>
        <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 448 512' fill='#666666'>
          <path d='M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z' />
        </svg>
        share
      </li>
      <li>
        <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512' fill='#666666'>
          <path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
        </svg>
        download
      </li>
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
  display: flex;
  align-items: center;
  gap: 8px;
}

.neu {
    border: 1px solid #183153;
    box-shadow: 0px 4px 0px 0px #183153;
}
`,
  element: SpeedDialNeuContextIcon,
};
