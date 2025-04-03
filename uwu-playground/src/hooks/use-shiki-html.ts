import { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki';

export const useShikiHtml = (code: string) => {
  const [html, setHtml] = useState('');
  useEffect(() => {
    codeToHtml(code, {
      lang: 'typescript',
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'catppuccin-mocha'
        : 'catppuccin-latte',
      decorations: [
        {
          // line and character are 0-indexed
          start: { line: 1, character: 0 },
          end: { line: 1, character: 11 },
          properties: { class: 'highlighted-word' },
        },
      ],
    }).then((resultHtml) => {
      setHtml(resultHtml);
    });
  }, [code]);
  return html;
};
