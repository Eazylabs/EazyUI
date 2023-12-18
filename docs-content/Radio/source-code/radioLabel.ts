import RadioLabel from '../blocks/RadioLabel';

export const RADIOLABEL = {
  html: `<div class="form-control">
  <input
    type="radio"
    id="left"
    name="text"
    class="radio radio-info"
    checked
  />
  <label for="left">Hello</label>
</div>
<div class="form-control">
  <input type="radio" id="right" name="text" class="radio radio-info" />
  <label for="right">World</label>
</div>`,
  css: `.form-control {
  display: flex;
  align-items: center;
  gap: 4px;
}

.radio {
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  width: 32px;
  height: 32px;
  border: 2px solid;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;
}

.radio-info {
  border-color: #4ba3e3;
}

.radio-info::before {
  background-color: #4ba3e3;
}

.radio:checked::before {
  transform: scale(1);
}

.radio-info:checked + label {
  color: #4ba3e3;
}

label {
  margin-right: 16px;
}`,
  element: RadioLabel,
};
