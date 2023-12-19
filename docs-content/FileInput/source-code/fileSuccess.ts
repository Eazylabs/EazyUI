import FileSuccess from '../blocks/FileSuccess';

export const FILESUCCESS = {
  html: `<input type="file" class="file-input file-success" />`,
  css: `.file-input {
  display: block;
  width: clamp(400px, 75%, 600px);
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
}

.file-success {
  border-color: #14b789;
}

.file-success::file-selector-button {
  background-color: #14b789;
}`,
  element: FileSuccess,
};
