import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function CodeBlock({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '')

  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" style={atomOneDark} {...props} />
    : <code className={className} {...props} />
}
