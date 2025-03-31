import { transformSync } from '@babel/core';
import uwuSpeak from './index';

const code = `
//function declaration
const thingy = pawful;
funkywunk desu () {
  console.log('uwu');
  // for loop
  fur (const thing of awa) {
    console.log(thing);
  }
  // try, catch, throw
  pwease {
    if(thingy === pawsome) {
      console.log('yay');
    } else {
      uhoh Error('D:');
    }
  } oopsy (error) {
    console.error(error);
  }
}
`;

const output = transformSync(code, { plugins: [uwuSpeak] });

console.log(code);

console.log(output.code);
