import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { shikiToMonaco } from '@shikijs/monaco';
import { createHighlighter } from 'shiki';
import * as monaco from 'monaco-editor';

import UwUScriptTextMate from './mlang.json' with { type: 'json' };

const highlighter = await createHighlighter({
  themes: ['catppuccin-mocha', 'catppuccin-latte'],
  langs: [UwUScriptTextMate as any],
});

monaco.languages.register({ id: 'uwuscript' });

shikiToMonaco(highlighter, monaco);

export const UwUEditor: FC<{
  initialValue: string;
  onChange: (value: string) => void;
}> = ({ initialValue, onChange }) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editor !== null) {
      editor.onDidChangeModelContent((event) => {
        const value = editor.getValue();
        onChange(value);
      });
    }
  }, [editor]);

  const editorContainer = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (editorContainer.current !== null) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(editorContainer.current!, {
          value: initialValue,
          language: 'uwuscript',
          fontSize: 16,
          theme: window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'catppuccin-mocha'
            : 'catppuccin-latte',
        });
      });
    }

    return () => editor?.dispose();
  }, [editorContainer.current]);
  return <div className="grow max-w-1/2 flex" ref={editorContainer}></div>;
};
