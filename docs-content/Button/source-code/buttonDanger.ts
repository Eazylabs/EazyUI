import ButtonDanger from "../blocks/ButtonDanger";

export const BUTTONDANGER= {
 html: `<button class='btn btn-danger'>Button Danger</button>`,
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-danger {
  background-color: #e03131;
  color: #fff;
}

.btn-danger:hover {
  background-color: #c92b2b;
}`,
  element: ButtonDanger,
};