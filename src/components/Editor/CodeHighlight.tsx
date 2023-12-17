import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeHighlight.css';

export default function CodeHighlight({ code, lang }) {
  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers
        language={lang}
        style={oneLight}
        lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
