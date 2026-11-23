import React, { useRef } from 'react';

function UseRefExample() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeText = (text: any) => {
    if (headingRef.current) {
      headingRef.current.textContent = text;
    }
  };

  return (
    <>
      <h1 ref={headingRef}>UseRef Example</h1>
      <input ref={inputRef} type="text" />
      <button onClick={() => changeText(inputRef.current?.value)}>Change Text</button>
    </>
  );
}

export default UseRefExample;
