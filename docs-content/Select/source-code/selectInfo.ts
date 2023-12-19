import SelectInfo from '../blocks/SelectInfo';

export const SELECTINFO = {
  html: `<select class="select select-info">
  <option selected disabled>
    Pick your language
  </option>
  <option>JavaScript</option>
  <option>TypeScript</option>
  <option>Python</option>
</select>`,
  css: `.select {
  width: min(100%, 300px);
  padding: 16px;
  border-radius: 8px;
  background-color: transparent;
}

.select-info {
  border: 1px solid #4ba3e3;
}

.select-info:focus {
  outline: 2px solid #4ba3e3;
  outline-offset: 2px;
}`,
  element: SelectInfo,
};
