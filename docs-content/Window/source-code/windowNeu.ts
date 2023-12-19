import WindowNeu from "../blocks/WIndowNeu";

export const WINDOWNEU = {
  html: `<div class="mockup neu">
        <div class="window-mockup neu"></div>
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

.mockup.neu{
    background-color: #fff;
    border: 1px solid #183153;
    box-shadow: 4px 4px 0px 0px #183153;
}

.window-mockup.neu{
    border: none;
    box-shadow: 0px 0px 0px 0px #F1F5F9;
    background-color: #ECEFF1;
}

.neu::before{
    background-color: #183153;
    box-shadow: 0 0 0 2px #183153, 
    1.5em 0 0 2px #183153, 
    3em 0 0 2px #183153;
}`,
  element: WindowNeu,
};
