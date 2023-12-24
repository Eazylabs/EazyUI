import StepHorizontal from "../blocks/StepHorizontal";

export const STEPHORIZONTAL = {
  html: `<ul class="step-h">
  <li class="step-item active" data-step="1">Step 1</li>
  <li class="step-item active" data-step="2">Step 2</li>
  <li class="step-item" data-step="3">Step 3</li>
  <li class="step-item" data-step="4">Step 4</li>
  <li class="step-item" data-step="5">Step 5</li>
</ul>`,
  css: `.step-h {
  display: flex;
  align-items: center;
  gap: 16px;
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

.step-h .step-item::before {
  top: -52px; left: 50%; transform: translateX(-50%);
}

.step-item.active::before {
  color:#fff;
  background: #183153;
}

.step-item:not(:last-child)::after {
  content: "";
  position: absolute;
}

.step-h .step-item:not(:last-child)::after {
  top: -36px;
  left: 80%;
  width: 52px;
  border-bottom: 2px solid #ccc;
}

.step-h .step-item.active::after {
  border-bottom: 2px solid #183153;
}

@media (min-width: 768px) {
  .step-h {
    gap: 72px;
  }

  .step-h .step-item:not(:last-child)::after {
    width: 90px;
  }
}`,
  element: StepHorizontal,
};
