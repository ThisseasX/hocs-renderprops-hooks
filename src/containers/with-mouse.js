import React from 'react';
import { fromEvent, Subject } from 'rxjs';
import { map, takeUntil, repeatWhen } from 'rxjs/operators';

const withMouse = Component =>
  class MouseHOC extends React.Component {
    constructor() {
      super();
      this.state = {
        x: 0,
        y: 0,
      };
    }

    componentDidMount() {
      const toggler = new Subject();

      this.clicks = fromEvent(window, 'click').subscribe(() => toggler.next());

      this.tracker = fromEvent(window, 'mousemove')
        .pipe(
          map(({ clientX: x, clientY: y }) => ({ x, y })),
          takeUntil(toggler),
          repeatWhen(() => toggler),
        )
        .subscribe(pos => this.setState(pos));
    }

    componentWillUnmount() {
      this.clicks.unsubscribe();
      this.tracker.unsubscribe();
    }

    render() {
      return <Component {...this.state} />;
    }
  };

export default withMouse;
