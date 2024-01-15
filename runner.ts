import { transformSync } from '@babel/core';
import uwuSpeak from './index';

const code = `
UWUconst n = 1;
if(n === 0) {
  console.log('wtf');
}
funkywunk desu () {
  console.log('uwu');
}
`;

const output = transformSync(code, { plugins: [uwuSpeak] });

console.log(output.code); // 'const x = 1;'
