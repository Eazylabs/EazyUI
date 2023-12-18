import SelectDanger from '../blocks/SelectDanger';

export const SELECTDANGER = {
  html: `<select class="select select-danger">
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

.select-danger {
  border: 1px solid #e03131;
}

.select-danger:focus {
  outline: 2px solid #e03131;
  outline-offset: 2px;
}`,
  element: SelectDanger,
};
