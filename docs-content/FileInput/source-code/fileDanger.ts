import FileDanger from '../blocks/FileDanger';

export const FILEDANGER = {
  html: `<input type="file" class="file-input file-danger" />`,
  css: `.file-input {
  display: block;
  width: clamp(400px, 50%, 600px);
  border: 4px solid #4ba3e3;
  border-radius: 8px;
  cursor: pointer;
}

.file-input::file-selector-button {
  background-color: #4ba3e3;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  color: #fff;
  text-transform: uppercase;
  margin-right: 28px;
}

.file-danger {
  border-color: #e03131;
}

.file-danger::file-selector-button {
  background-color: #e03131;
}`,
  element: FileDanger,
};
