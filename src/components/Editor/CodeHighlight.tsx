import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeHighlight.css';

export default function CodeHighlight({ code, lang }) {
  return (
    <div style={{ fontFamily: 'monospace' }} className='editor' id='editor'>
      <SyntaxHighlighter showLineNumbers language={lang} style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
