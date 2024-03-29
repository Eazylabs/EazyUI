import Window from "../blocks/Window";

export const WINDOW = {
  html: `<div class="mockup window">
        <div class="window-mockup window"></div>
    </div>`,
  css: `.mockup {
    width: 440px;
    height: 240px;
    flex-shrink: 0;
    border-radius: 8px;
}

.window-mockup {
    width: 440px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
}

.window-mockup::before {
    display: block;
    position: relative;
    content: '';
    top: 1.1em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
}

.mockup.window {
    background-color: #fff;
    box-shadow: 0px 4px 8px #f1f5f9;
}
.window-mockup.window{
    background-color: #ECEFF1;
}

.window::before {
    background-color: #C4C4C4;
    box-shadow: 0 0 0 2px #C4C4C4, 
    1.5em 0 0 2px #C4C4C4, 
    3em 0 0 2px #C4C4C4;
}`,
  element: Window,
};
