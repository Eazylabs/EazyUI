export const borderMerge = (style, setStyle, removeProperty, editorView, value) => {
  if (style[editorView].hasOwnProperty('borderTopWidth')) {
    const styles =
      `border${value !== 'All' ? value : ''}Width` === 'borderTopWidth'
        ? style[editorView]
        : removeProperty('borderTopWidth', style[editorView]);

    console.log(styles, 'styles');
    setStyle({
      ...style,
      [editorView]: {
        ...styles,
        [`border${value !== 'All' ? value : ''}Width`]: style[editorView]['borderTopWidth'],
      },
    });
  } else if (style[editorView].hasOwnProperty('borderBottomWidth')) {
    console.log('masuk ke BottomBorder');
    const styles =
      `border${value !== 'All' ? value : ''}Width` === 'borderBottomWidth'
        ? style[editorView]
        : removeProperty('borderBottomWidth', style[editorView]);

    console.log(styles, 'styles');
    setStyle({
      ...style,
      [editorView]: {
        ...styles,
        [`border${value !== 'All' ? value : ''}Width`]: style[editorView]['borderBottomWidth'],
        borderPosition: value,
      },
    });
  } else if (style[editorView].hasOwnProperty('borderLeftWidth')) {
    console.log('masuk ke LeftBorder');
    const styles =
      `border${value !== 'All' ? value : ''}Width` === 'borderLeftWidth'
        ? style[editorView]
        : removeProperty('borderLeftWidth', style[editorView]);

    console.log(styles, 'styles');
    setStyle({
      ...style,
      [editorView]: {
        ...styles,
        [`border${value !== 'All' ? value : ''}Width`]: style[editorView]['borderLeftWidth'],
        borderPosition: value,
      },
    });
  } else if (style[editorView].hasOwnProperty('borderRightWidth')) {
    console.log('masuk ke RightBorder');
    const styles =
      `border${value !== 'All' ? value : ''}Width` === 'borderRightWidth'
        ? style[editorView]
        : removeProperty('borderRightWidth', style[editorView]);

    console.log(styles, 'styles');
    setStyle({
      ...style,
      [editorView]: {
        ...styles,
        [`border${value !== 'All' ? value : ''}Width`]: style[editorView]['borderRightWidth'],
        borderPosition: value,
      },
    });
  } else if (style[editorView].hasOwnProperty('borderWidth')) {
    console.log(`masuk ke borderWidth`);
    const styles =
      `border${value !== 'All' ? value : ''}Width` === 'borderWidth'
        ? style[editorView]
        : removeProperty('borderWidth', style[editorView]);

    console.log(styles, 'styles');
    setStyle({
      ...style,
      [editorView]: {
        ...styles,
        [`border${value !== 'All' ? value : ''}Width`]: style[editorView]['borderWidth'],
        borderPosition: value,
      },
    });
  }
};
