import type { PluginItem } from '@babel/core';

import * as uwuParser from '@uwuscript/parser';

export default (): PluginItem => {
  return {
    parserOverride(input: string, options?: any) {
      return uwuParser.parse(input, options);
    },
    visitor: {
      Identifier: (path) => {
        // in this example change all the variable `n` to `x`
        if (path.isIdentifier({ name: 'n' })) {
          path.node.name = 'x';
        }
      },
      ExpressionStatement: (expression) => {
        if (expression) {
          console.log(expression);
        }
      },
    },
  };
};
