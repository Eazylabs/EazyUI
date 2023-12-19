import SelectNeu from '../blocks/SelectNeu';

export const SELECTNEU = {
  html: `<select class="select select-neu">
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

.select-neu {
  border: 1px solid #183153;
}

.select-neu:focus {
  outline: 2px solid #183153;
  outline-offset: 2px;
}
`,
  element: SelectNeu,
};
