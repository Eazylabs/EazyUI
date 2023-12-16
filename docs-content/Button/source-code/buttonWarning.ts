import ButtonWarning from "../blocks/ButtonWarning";

export const BUTTONWARNING= {
 html: `<button class='btn btn-warning'>Button warning</button>`,
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-warning {
  background-color: #FFd43b;
  color: #fff;
}

.btn-warning:hover {
  background-color: #FFc82c;
}`,
  element: ButtonWarning,
};