import tsx from 'tm-grammars/grammars/tsx.json';

import uwuBase from './uwu-script.tmLanguage.base.json';

export const uwuLangTsx = {
  ...tsx,
  ...uwuBase,
  repository: {
    ...tsx.repository,
    ...uwuBase.repository,
    'control-statement': tsx.repository['control-statement'].patterns,
  },
  patterns: tsx.patterns,
};
