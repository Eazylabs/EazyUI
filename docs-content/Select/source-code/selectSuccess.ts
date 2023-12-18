import SelectSuccess from '../blocks/SelectSuccess';

export const SELECTSUCCESS = {
  html: `<select class="select select-success">
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

.select-success {
  border: 1px solid #14b789;
}

.select-success:focus {
  outline: 2px solid #14b789 !important;
  outline-offset: 2px;
}`,
  element: SelectSuccess,
};
