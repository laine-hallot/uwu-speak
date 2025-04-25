import type { BabelFileResult } from '@babel/core';
import { FC, useMemo } from 'react';
import * as Babel from '@babel/standalone';

import UwU from 'uwu-speak';
import { useShikiHtml } from './hooks/use-shiki-html';

const babelTransform = (
  input: string,
):
  | { success: true; data: BabelFileResult }
  | { success: false; error: unknown } => {
  try {
    const transformResult = Babel.transform(input, {
      plugins: [UwU],
    });
    return { success: true, data: transformResult };
  } catch (error) {
    return { success: false, error };
  }
};

const CodeDisplay: FC<{ babelResult: BabelFileResult }> = ({ babelResult }) => {
  const html = useShikiHtml(babelResult.code ?? '');
  return (
    <div
      className="grow text-base"
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ fontVariantLigatures: 'none' }}
    ></div>
  );
};

const ErrorDisplay: FC<{ output: { success: false; error: unknown } }> = ({
  output: { error },
}) => {
  const { errorMessage } = useMemo(() => {
    if (error instanceof SyntaxError) {
      return { errorMessage: error.message };
    }
    return { errorMessage: 'Unknown error occurred while transpiling code' };
  }, [error]);
  return <pre className="text-red-400">{errorMessage}</pre>;
};

export const OutputDisplay: FC<{ input: string }> = ({ input }) => {
  const output = useMemo(() => babelTransform(input), [input]);

  return (
    <div className="grow flex flex-col">
      <h2 className="text-2xl leading-10 font-mono">Output:</h2>
      <div className="flex">
        {output.success ? (
          <CodeDisplay babelResult={output.data} />
        ) : (
          <ErrorDisplay output={output} />
        )}
      </div>
    </div>
  );
};
