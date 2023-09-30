import React from 'react';

export const ButtonBasic = ({ style, handleEditorView, content }) => {
  return (
    <button tabIndex={1} id='.button-container' style={style['.button-container']} onClick={handleEditorView}>
      {content['.button-container']}
    </button>
  );
};
