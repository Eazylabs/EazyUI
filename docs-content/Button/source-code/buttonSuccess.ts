import ButtonSuccess from "../blocks/ButtonSuccess";

export const BUTTONSUCCESS = {
  html: `<button class='btn btn-success'>Button Success</button>`,
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-success {
  background-color: #14b789;
  color: #fff;
}

.btn-success:hover {
  background-color: #0f9e7a;
}`,
  element: ButtonSuccess,
};
