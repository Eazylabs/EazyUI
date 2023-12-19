import TextareaInfo from '../blocks/TextareaInfo';

export const TEXTAREAINFO = {
  html: `<div class="form-control">
  <textarea
    name="message"
    id="message"
    cols="30"
    rows="10"
    placeholder="Your message..."
    class="textarea textarea-info"
  ></textarea>
  <label for="message" class="label-input">
    Your message...
  </label>
</div>`,
  css: `.form-control {
  position: relative;
}

.textarea {
  padding: 16px 32px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: min(100%, 500px);
}

.textarea::placeholder {
  color: transparent;
}

.textarea:focus {
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

.textarea:placeholder-shown + .label-input {
  top: 32px;
  left: 16px;
  transform: translateY(-50%);
  opacity: 0.3;
  transition: all 0.2s ease-in-out;
}

.textarea:focus + .label-input {
  top: 0;
  left: 0;
  transform: translateY(-50%) scale(0.75);
  opacity: 1;
  background-color: #fafafa;
  padding-inline: 16px;
}

.textarea-info:focus {
  border-color: #4ba3e3;
}`,
  element: TextareaInfo,
};
