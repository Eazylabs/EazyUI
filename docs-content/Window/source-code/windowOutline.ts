import WindowOutline from "../blocks/WindowOutline";

export const WINDOWOUTLINE = {
  html: `<div class="mockup outline">
        <div class="window-mockup outline"></div>
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

.mockup.outline {
    border: 1px solid #6B7280;
    background-color: #fff; 
    box-shadow: 0px 4px 8px 0px #F1F5F9;
}

.window-mockup.outline {
    border-bottom: 1px solid var(--text-secondary, #6B7280);
    background-color: transparent;
}

.outline::before {
    background-color: #C4C4C4;
    box-shadow: 0 0 0 2px #C4C4C4, 
    1.5em 0 0 2px #C4C4C4, 
    3em 0 0 2px #C4C4C4;
}`,
  element: WindowOutline,
};
