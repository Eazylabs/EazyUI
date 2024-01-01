import MarqueeNeuText from '../blocks/MarqueeNeuText';

export const MARQUEENEUTEXT = {
  html: `<div class='marquee neu text-running'>
  <div class='marquee-track'>
    <div class='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM</div>
    <div class='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM</div>
    <div class='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM</div>
    <div class='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM</div>
  </div>
</div>`,
  css: `.marquee {
  width: 70%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.text-running {
  height: 50px;
  font-size: 20px;
  font-weight: bolder;
}

.marquee-track {
  display: flex;
  width: 200%;
  height: 100%;
  position: absolute;
  align-items: center;
  animation: marquee 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-track .content {
  margin-right: 10px;
  min-width: fit-content;
  height: fit-content;
  font-size: 20px;
}

.neu {
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
`,
  element: MarqueeNeuText,
};
