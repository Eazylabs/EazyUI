import TooltipBlack from "../blocks/TooltipBlack";

export const TOOLTIPBLACK = {
  html: `<button class='btn btn-neu tooltip black' data-tooltip='Hello!'>Hover Me</button>`,
  css: `.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
    transform: translate(0, 0);
}

.btn-neu{
    color: #183153;
    font: bold;
    border-radius: 5px;
    background-color: #4ba3e3;
    border: 1px solid #183153;
    box-shadow: 0 5px 0 0 #183153;
}

.btn-neu:hover {
    background-color: #348fd0;
    box-shadow: 5px 5px 0 0 #183153;
}

.tooltip:hover:before{
    top: -16px;
    left: 50%;
    border: solid transparent;
    content: " ";
    position: absolute;
    border-color: transparent;
    border-width: 5px;
    margin-left: -5px;
    transform: translate(0, 0);
}

.tooltip:hover:after{
    content: attr(data-tooltip);
    padding: 12px 44px;
    border-radius: 8px;
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -100%);
    top: -15px;
    left: 50%;
    text-align: center;
    white-space: nowrap;
    width: auto;
}

.black:hover:before{
    border-top-color: #183153;
}

.black:hover:after{
    background: #183153;
    color: #ffffff;
}`,
    element: TooltipBlack,
};