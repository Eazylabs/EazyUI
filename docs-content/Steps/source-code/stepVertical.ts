import StepVertical from "../blocks/StepVertical";

export const STEPVERTICAL = {
  html: `<ul class="step-v">
  <li class="step-item active" data-step="1">Step 1</li>
  <li class="step-item active" data-step="2">Step 2</li>
  <li class="step-item" data-step="3">Step 3</li>
  <li class="step-item" data-step="4">Step 4</li>
  <li class="step-item" data-step="5">Step 5</li>
</ul>`,
  css: `.step-v {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  color: #183153;
}

.step-item {
  position: relative;
}

.step-item::before {
  content: attr(data-step);
  position: absolute;
  width: 32px;
  height: 32px;
  background: #ccc;
  border-radius: 50%;
  display: grid;
  place-content: center;
  z-index: 1;
}

.step-v .step-item::before {
  top: -8px;
  right: 60px;
}

.step-item.active::before {
  color:#fff;
  background: #183153;
}

.step-item:not(:last-child)::after {
  content: "";
  position: absolute;
}

.step-v .step-item:not(:last-child)::after {
  top: 24px;
  left: -30px;
  height: 60px;
  border-left: 2px solid #ccc;
}

.step-v .step-item.active::after {
  border-left: 2px solid #183153;
}

@media (min-width: 768px) {
  .step-v {
    gap: 72px;
  }

  .step-v .step-item:not(:last-child)::after {
    width: 90px;
  }
}`,
  element: StepVertical,
};
