import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import React from 'react';
import Editor from 'react-simple-code-editor';
import './editor.css';
import './style.css';

export default function CodeHighlight({ code, lang }) {
  return (
    <div className='eazy-editor' style={{ fontFamily: 'monospace' }}>
      <Editor
        value={code}
        onValueChange={(e) => console.log(e)}
        highlight={(code) => highlight(code, languages['css'], '')}
        readOnly
      />
    </div>
  );
}
