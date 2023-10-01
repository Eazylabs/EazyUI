import { hexToRGBA } from './color';

export const shadowOpacity = (style, setStyle, editorView, property, value) => {
  if (style[editorView].boxShadow) {
    console.log('jalan');
    const [shadowX, shadowY, shadowBlur, shadowSpread, shadowColor] = style[editorView].boxShadow.split(' ');
    setStyle({
      ...style,
      [editorView]: {
        ...style[editorView],
        boxShadow: `${shadowX} ${shadowY} ${shadowBlur} ${shadowSpread} ${shadowColor.replace(
          /[^,]+(?=\))/,
          style[editorView].shadowOpacity && style[editorView].shadowOpacity !== ''
            ? parseInt(style[editorView].shadowOpacity) / 10
            : 1,
        )}`,
        [property]: value,
      },
    });
  }
};
