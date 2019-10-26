import React from 'react';
import Mouse from 'components/mouse';
import withMouse from 'containers/with-mouse';
import MouseTracker from 'containers/mouse-tracker';
import useMouse from 'hooks/use-mouse';

const MouseHOC = withMouse(Mouse);

const App = () => {
  const pos = useMouse();

  return (
    <>
      <MouseHOC />
      <MouseTracker render={Mouse} />
      <Mouse {...pos} />
      <p>Click anywhere to pause</p>
    </>
  );
};

export default App;
