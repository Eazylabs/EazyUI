import InputWarning from '../blocks/InputWarning';

export const INPUTWARNING = {
  html: `<div class="form-control">
  <input
    type="text"
    id="email"
    class="text-input input-warning"
    autocomplete="off"
    placeholder="Email"
  />
  <label for="email" class="label-input">
    Email
  </label>
</div>;`,
  css: `.form-control {
  position: relative;
}

.text-input {
  padding: 16px 32px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.text-input::placeholder {
  color: transparent;
}

.text-input:focus {
  outline: none;
  border: 3px solid #4ba3e3;
}

.label-input {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%) scale(0.75);
  opacity: 1;
  background-color: #fafafa;
  padding-inline: 16px;
}

.text-input:placeholder-shown + .label-input {
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  opacity: 0.3;
  transition: all 0.2s ease-in-out;
}

.text-input:focus + .label-input {
  top: 0;
  left: 0;
  transform: translateY(-50%) scale(0.75);
  opacity: 1;
  background-color: #fafafa;
  padding-inline: 16px;
}

.input-warning:focus {
  border-color: #ffd43b;
}`,
  element: InputWarning,
};
