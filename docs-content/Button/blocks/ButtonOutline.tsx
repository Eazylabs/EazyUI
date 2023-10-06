import { useHover } from '@site/src/utils/hooks';
import React from 'react';

export function ButtonOutline({ style, handleEditorView, content, setStyle, styleStorage, setStyleStorage }) {
  const { onMouseEnter, onMouseLeave } = useHover(style, setStyle, styleStorage, setStyleStorage);
  return (
    <button
      id='.button-outline'
      style={style['.button-outline']}
      onClick={handleEditorView}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content['.button-outline']}
    </button>
  );
}
