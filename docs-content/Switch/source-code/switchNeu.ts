import SwitchNeu from '../blocks/SwitchNeu';

export const SWITCHNEU = {
  html: `<div class="switch-btn">
  <input type="checkbox" class="switch" />
  <span class="switch-indicator switch-neu"></span>
</div>`,
  css: `.switch-btn {
  position: relative;
  width: 48px;
  height: 24px;
  margin: 0 auto;
  border-radius: 40px;
  margin: 60px auto 76px auto;
}

.switch {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

.switch-indicator {
  position: absolute;
  inset: 0;
  border: 4px solid #4ba3e3;
  overflow: hidden;
  background-color: #fff;
  border-radius: 40px;
  transition: 0.8s ease;
  filter: grayscale(1);
  opacity: 0.2;
}

.switch-indicator:before {
  content: '';
  position: absolute;
  top: 1px;
  left: 2px;
  width: 14px;
  height: 14px;
  background-color: #4ba3e3;
  margin-left: 0px;
  border-radius: 50%;
  transition:
    0.4s ease border-radius,
    0.4s ease transform,
    0.6s ease width,
    0.6s ease margin-left,
    0.8s ease border-color;
}

.switch:active + .switch-indicator:before {
  width: 80px;
  border-radius: 40px;
}

.switch:checked:active + .switch-indicator:before {
  margin-left: -2px;
}

.switch:checked + .switch-indicator {
  filter: grayscale(0);
  opacity: 1;
}

.switch:checked + .switch-indicator:before {
  transform: translateX(22px);
}

.switch-neu {
  border-color: #183153;
}

.switch-neu::before {
  background-color: #183153;
}`,
  element: SwitchNeu,
};
