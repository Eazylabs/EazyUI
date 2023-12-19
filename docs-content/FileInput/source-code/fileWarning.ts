import FileWarning from '../blocks/FileWarning';

export const FILEWARNING = {
  html: `<input type="file" class="file-input file-warning" />`,
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

.file-warning {
  border-color: #ffd43b;
}

.file-warning::file-selector-button {
  color: #183153;
  background-color: #ffd43b;
}`,
  element: FileWarning,
};
