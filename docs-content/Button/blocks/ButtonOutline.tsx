import Container from '@site/src/components/shared/Container';
import { useHover } from '@site/src/utils/hooks';
import React from 'react';

export function ButtonOutline({ style, handleEditorView, content, setStyle, styleStorage, setStyleStorage, mode }) {
  const { onMouseEnter, onMouseLeave } = useHover(style, setStyle, styleStorage, setStyleStorage, mode);
  return (
    <Container
      id='.button-outline'
      style={style['.button-outline']}
      role={'button'}
      mode={mode}
      onClick={handleEditorView}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content['.button-outline']}
    </Container>
  );
}
