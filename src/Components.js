import React from 'react';

export const Components = () => {
  return (
    <>
      <Components1 x={4} />
      <Components1 />

      <br />

      <Components2 />

      <br />

      <Components3 />
    </>
  );
};

// TODO: What does this component do?
// Returns 8, because x equals 4
// Note: By using "??", when "props.x" is defined, it will use "0" instead
const Components1 = (props) => {
  const x = props.x ?? 0;
  return <div>Components1: {x * 2}</div>;
};

// TODO: What does this component show?
const Components2 = () => {
  return (
    <div>
      Components2: <WelcomeLoudly name={'Someone'} />
      <br />
      Components2: <WelcomeSoftly name={'Someone'} />
    </div>
  );
};

const WelcomeLoudly = (props) => {
  const name = props.name ?? '';
  return <span>WELCOME, {name.toUpperCase()}</span>;
};

const WelcomeSoftly = (props) => {
  const name = props.name ?? '';
  return <span>welcome, {name.toLowerCase()}</span>;
};

// TODO: Make some more basic components, and render them after "Components3".
const Components3 = () => {
  return <div>Components3:</div>;
};
