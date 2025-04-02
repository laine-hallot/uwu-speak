import React from 'react';
import { UwUScriptEditor } from './uwu-script-editor';

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eff1f5] text-[#4c4f69] dark:bg-[#1e1e2e] dark:text-[#cdd6f4]">
      <header>
        <nav></nav>
      </header>
      <main className="grow flex flex-col">
        <UwUScriptEditor />
      </main>
    </div>
  );
};
