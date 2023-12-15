import ButtonWarningOutline from "../blocks/ButtonWarningOutline";

export const BUTTONWARNINGOUTLINE = {
  html: '<button class="btn btn-warning-outline">Button Warning Outline</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
}
  
.btn-warning-outline {
  background-color: transparent;
  border: 1px solid #FFd43b;
  color: #FFd43b;
}

.btn-warning-outline:hover {
  background-color: #FFd43b;
  color: #fff;
}`,
  element: ButtonWarningOutline,
};
