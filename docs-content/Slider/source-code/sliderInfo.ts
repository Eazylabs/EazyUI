import SliderInfo from '../blocks/SliderInfo';

export const SLIDERINFO = {
  html: `<input type='range' class='slider slider-info' min='0' max='100' />`,
  css: `.slider {
  appearance: none;
  width: 324px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  z-index: 2;
}

.slider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 8px;
  width: 100%;
  background: #ddd;
  border-radius: 9px;
  z-index: -1;
}

.slider::-webkit-slider-runnable-track {
  height: 24px;
  background: transparent;
  border-radius: 16px;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-radius: 50%;
}

.slider-info::-webkit-slider-thumb {
  border: 2px solid #4ba3e3;
  box-shadow: -407px 0 0 400px #4ba3e3;
}`,
  element: SliderInfo,
};
