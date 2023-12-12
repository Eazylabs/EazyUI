import BadgeBoxDot from '../blocks/BadgeBoxDot';

export const BADGEBOXDOT = {
  html: `<div className='badge-box'>
  <div className='badge-dot'></div>
</div>
  `,
  css: `.badge-box {
  position: relative;
  width: 64px;
  height: 64px;
  border: 1px solid #4ba3e3;
  border-radius: 8px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.badge-dot {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background-color: #e03131;
  border-radius: 50%;
}

.badge-box::after {
  content: '';
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background-color: #e03131;
  border-radius: 50%;
  animation: pulse 1s ease-in-out infinite;
}
  `,
  element: BadgeBoxDot,
};
