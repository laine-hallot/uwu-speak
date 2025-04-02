import { FC, useState, useEffect, useMemo } from 'react';
import * as Babel from '@babel/standalone';
import { codeToHtml } from 'shiki';

import UwU from 'uwu-speak';

export const CodeDisplay: FC<{ input: string }> = ({ input }) => {
  const output = useMemo(
    () =>
      Babel.transform(input, {
        plugins: [UwU],
      }),
    [input],
  );

  const [html, setHtml] = useState('');

  useEffect(() => {
    codeToHtml(output.code ?? '', {
      lang: 'typescript',
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'catppuccin-mocha'
        : 'catppuccin-latte',
    }).then((resultHtml) => {
      setHtml(resultHtml);
    });
  }, [output.code]);

  return (
    <div className="grow flex flex-col">
      <h2 className="text-2xl leading-10 font-mono">Output:</h2>
      <div
        className="grow text-base"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontVariantLigatures: 'none' }}
      ></div>
    </div>
  );
};
