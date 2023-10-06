export const useHover = (style, setStyle, styleStorage, setStyleStorage) => {
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
