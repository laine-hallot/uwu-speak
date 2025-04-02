import { resolve } from 'node:path';
import { writeFileSync, mkdirSync } from 'node:fs';

import { uwuLangTsx } from './syntaxes/tsx/tsx';

mkdirSync(resolve('./dist/syntaxes'), { recursive: true });

writeFileSync(
  resolve('./dist/', 'uwu-script.tmLanguage.json'),
  JSON.stringify(uwuLangTsx, null, 2),
);
