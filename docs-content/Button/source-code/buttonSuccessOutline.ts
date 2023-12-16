import ButtonSuccessOutline from "../blocks/ButtonSuccessOutline";

export const BUTTONSUCCESSOUTLINE = {
  html: '<button class="btn btn-success-outline">Button Success Outline</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
}
  
.btn-success-outline {
  background-color: transparent;
  border: 1px solid #14b789;
  color: #14b789;
}

.btn-success-outline:hover {
  background-color: #14b789;
  color: #fff;
}`,
  element: ButtonSuccessOutline,
};
