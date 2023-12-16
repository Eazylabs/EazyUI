import ButtonDangerOutline from "../blocks/ButtonDangerOutline";

export const BUTTONDANGEROUTLINE = {
  html: '<button class="btn btn-danger-outline">Button Danger Outline</button>',
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
}
  
.btn-danger-outline {
  background-color: transparent;
  border: 1px solid #e03131;
  color: #e03131;
}

.btn-danger-outline:hover {
  background-color: #e03131;
  color: #fff;
}`,
  element: ButtonDangerOutline,
};
