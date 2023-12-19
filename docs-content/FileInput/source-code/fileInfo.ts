import FileInfo from '../blocks/FileInfo';

export const FILEINFO = {
  html: `<input type="file" class="file-input file-info" />`,
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

.file-info {
  border-color: #4ba3e3;
}

.file-info::file-selector-button {
  background-color: #4ba3e3;
}`,
  element: FileInfo,
};
