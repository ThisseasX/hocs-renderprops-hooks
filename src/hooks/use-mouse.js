import { useState, useEffect } from 'react';
import { fromEvent, Subject } from 'rxjs';
import { map, takeUntil, repeatWhen } from 'rxjs/operators';

const useMouse = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const toggler = new Subject();

    const clicks = fromEvent(window, 'click').subscribe(() => toggler.next());

    const tracker = fromEvent(window, 'mousemove')
      .pipe(
        map(({ clientX: x, clientY: y }) => ({ x, y })),
        takeUntil(toggler),
        repeatWhen(() => toggler),
      )
      .subscribe(pos => setPos(pos));

    return () => {
      clicks.unsubscribe();
      tracker.unsubscribe();
    };
  }, []);

  return pos;
};

export default useMouse;
