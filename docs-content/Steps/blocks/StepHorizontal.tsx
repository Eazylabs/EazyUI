import React from "react";
import '../styles/style.css'

export default function StepHorizontal() {
  return (
    <ul className="step-h">
      <li className="step-item active" data-step="1">Step 1</li>
      <li className="step-item active" data-step="2">Step 2</li>
      <li className="step-item" data-step="3">Step 3</li>
      <li className="step-item" data-step="4">Step 4</li>
      <li className="step-item" data-step="5">Step 5</li>
    </ul>
  );
}
