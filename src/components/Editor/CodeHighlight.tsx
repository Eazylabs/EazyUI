import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeHighlight.css';

export default function CodeHighlight({ code, lang }) {
  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers
        language={lang}
        style={oneDark}
        lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
