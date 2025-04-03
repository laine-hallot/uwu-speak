import { useState, useCallback } from 'react';
import { OutputDisplay } from './output-display';
import { UwUEditor } from './editor';

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

export const UwUScriptEditor = () => {
  const [input, setInput] = useState(code);

  const handleInput = useCallback((value: string) => {
    setInput(value);
  }, []);

  return (
    <div className="grow flex gap-8 w-full">
      <UwUEditor initialValue={code} onChange={handleInput} />
      <OutputDisplay input={input} />
    </div>
  );
};
