import SelectWarning from '../blocks/SelectWarning';

export const SELECTWARNING = {
  html: `<select class="select select-warning">
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

.select-warning {
  border: 1px solid #ffd43b;
}

.select-warning:focus {
  outline: 2px solid #ffd43b;
  outline-offset: 2px;
}`,
  element: SelectWarning,
};
