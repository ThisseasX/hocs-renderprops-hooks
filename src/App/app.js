import React from 'react';
import Mouse from '../Mouse';
import MouseProvider from '../MouseTracker';
import useMouse from '../useMouse';
import withMouse from '../withMouse';

const MouseHOC = withMouse(Mouse);

const App = () => {
  const pos = useMouse();

  return (
    <>
      <MouseHOC />
      <MouseProvider render={Mouse} />
      <Mouse {...pos} />
    </>
  );
};

export default App;
