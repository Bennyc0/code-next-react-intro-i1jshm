import React, { useState } from 'react';

export const State = () => {
  return (
    <>
      <State1 />

      <br />

      <State2 />
    </>
  );
};

// TODO: What happens when the button is clicked?
// Adds "foo"
const State1 = () => {
  const [foos, setFoos] = useState([]);

  const addFoo = () => {
    const nextFoos = [...foos, `foo${foos.length + 1}`];
    setFoos(nextFoos);
  };

  return (
    <div>
      State1: {foos.join(', ')}
      <br />
      <button className="btn btn-primary" onClick={addFoo}>
        Add foo
      </button>
    </div>
  );
};

// TODO: What do you think will happen when the increment button is clicked?
// Nothing happens

// Why do you think this happens?
//

// Fix this component.
// Note: Always use "const" when your using hooks, such as "useState()"
const State2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Note: "count++" is like:
  // count;
  // count = count + 1;
  return (
    <div>
      State2: {count}
      <br />
      <button className="btn btn-primary" onClick={increment}>
        increment
      </button>
    </div>
  );
};
