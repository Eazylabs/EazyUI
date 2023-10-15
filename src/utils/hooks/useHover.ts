export const useHover = (style, setStyle, styleStorage, setStyleStorage, mode) => {
  if (mode == 'editor') return { onMouseEnter: null, onMouseLeave: null };
  const onMouseEnter = () => {
    const temp = style;
    setStyle(styleStorage);
    setStyleStorage(temp);
  };

  const onMouseLeave = () => {
    const temp = style;
    setStyle(styleStorage);
    setStyleStorage(temp);
  };

  return { onMouseEnter, onMouseLeave };
};
