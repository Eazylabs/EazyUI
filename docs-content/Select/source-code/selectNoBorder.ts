import SelectNoBorder from '../blocks/SelectNoBorder';

export const SELECTNOBORDER = {
  html: `<select class="select">
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

.select:focus {
  outline: 2px solid #e5e7eb;
  outline-offset: 2px;
}`,
  element: SelectNoBorder,
};
