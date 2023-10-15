import Container from '@site/src/components/shared/Container';
import React from 'react';

export const ButtonBasic = ({ style, handleEditorView, content, mode }) => {
  return (
    <Container
      mode={mode}
      role={'button'}
      tabIndex={1}
      id='.button-container'
      style={style['.button-container']}
      onClick={handleEditorView}
    >
      {content['.button-container']}
    </Container>
  );
};
