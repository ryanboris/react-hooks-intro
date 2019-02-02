import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const AppFunc = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  console.group('useEffect()');
  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count]);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const toggleLight = () => {
    return setIsOn(prevIsOn => !prevIsOn);
  };

  const incrementCount = () => {
    return setCount(prevCount => prevCount + 1);
  };
  return (
    <>
      <h2>Counter</h2>
      <Button color="danger" onClick={incrementCount}>
        {count}
      </Button>
      <img
        src={
          isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          width: '50px',
          height: '50px'
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />

      <div>{JSON.stringify(mousePosition, null, 2)}</div>
    </>
  );
};

export default AppFunc;
