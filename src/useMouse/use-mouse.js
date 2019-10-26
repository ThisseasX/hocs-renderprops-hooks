import { useState, useEffect, useCallback } from 'react';

const useMouse = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const eventListener = useCallback(e => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const cancel = useCallback(() => {
    window.removeEventListener('mousemove', eventListener);
    window.removeEventListener('click', cancel);
  }, [eventListener]);

  useEffect(() => {
    window.addEventListener('mousemove', eventListener);
    window.addEventListener('click', cancel);
    return cancel;
  }, [eventListener, cancel]);

  return pos;
};

export default useMouse;
