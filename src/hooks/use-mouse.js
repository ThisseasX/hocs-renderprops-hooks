import { useState, useEffect, useCallback } from 'react';

const useMouse = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const startTracking = useCallback(e => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const stopTracking = useCallback(() => {
    window.removeEventListener('mousemove', startTracking);
    window.removeEventListener('click', stopTracking);
  }, [startTracking]);

  useEffect(() => {
    window.addEventListener('mousemove', startTracking);
    window.addEventListener('click', stopTracking);

    return stopTracking;
  }, [startTracking, stopTracking]);

  return pos;
};

export default useMouse;
