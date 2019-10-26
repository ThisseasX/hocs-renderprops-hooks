import { Component } from 'react';
import { fromEvent, BehaviorSubject, EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

class MouseTracker extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    const toggler = new BehaviorSubject(true);

    this.clicks = fromEvent(window, 'click').subscribe(() =>
      toggler.next(!toggler.getValue()),
    );

    const mousePositions = fromEvent(window, 'mousemove').pipe(
      map(({ clientX: x, clientY: y }) => ({ x, y })),
    );

    this.tracker = toggler
      .pipe(switchMap(isTracking => (isTracking ? mousePositions : EMPTY)))
      .subscribe(pos => this.setState(pos));
  }

  componentWillUnmount() {
    this.clicks.unsubscribe();
    this.tracker.unsubscribe();
  }

  render() {
    return this.props.render(this.state);
  }
}

export default MouseTracker;
